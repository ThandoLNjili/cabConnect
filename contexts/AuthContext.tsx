import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { doc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { FORCED_LOGOUT_KEY, getOrCreateSessionId } from '../utils/session';

const ACTIVE_ROLE_KEY = 'cabconnect_active_role';

interface UserProfile {
  role?: string;      // legacy single-role field
  roles?: string[];   // new multi-role field
  approved?: boolean;
}

interface AuthContextValue {
  user: User | null;
  /** All roles this user holds */
  roles: string[];
  /** Currently active role (used for dashboard switching) */
  activeRole: string | null;
  setActiveRole: (r: string) => void;
  /** @deprecated alias of activeRole — kept for backward compat */
  role: string | null;
  approved: boolean | null;
  booting: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  roles: [],
  activeRole: null,
  setActiveRole: () => {},
  role: null,
  approved: null,
  booting: true,
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

function normaliseRoles(profile: UserProfile | null): string[] {
  if (!profile) return [];
  if (Array.isArray(profile.roles) && profile.roles.length > 0) return profile.roles;
  if (profile.role) return [profile.role];
  return [];
}

function pickActiveRole(roles: string[], saved: string | null): string | null {
  if (!roles.length) return null;
  if (saved && roles.includes(saved)) return saved;
  // Priority: admin > driver
  if (roles.includes('admin')) return 'admin';
  return roles[0];
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [activeRole, setActiveRoleState] = useState<string | null>(null);
  const [approved, setApproved] = useState<boolean | null>(null);
  const [booting, setBooting] = useState(true);

  const setActiveRole = (r: string) => {
    setActiveRoleState(r);
    localStorage.setItem(ACTIVE_ROLE_KEY, r);
  };

  useEffect(() => {
    let profileUnsub: (() => void) | null = null;
    const unsub = onAuthStateChanged(auth, (u) => {
      if (profileUnsub) {
        profileUnsub();
        profileUnsub = null;
      }

      if (!u) {
        setUser(null);
        setRoles([]);
        setActiveRoleState(null);
        setApproved(null);
        setBooting(false);
        return;
      }

      const sessionId = getOrCreateSessionId();
      const userRef = doc(db, 'users', u.uid);
      let isFirstSnapshot = true;

      profileUnsub = onSnapshot(
        userRef,
        (snap) => {
          const profile = snap.exists() ? (snap.data() as UserProfile & { activeSessionId?: string }) : null;
          const activeSessionId = profile?.activeSessionId;

          // Session enforcement: check if another device has claimed this account
          if (activeSessionId && activeSessionId !== sessionId) {
            // On first snapshot, ignore mismatch (race condition with claimSession write)
            // Subsequent snapshots will enforce the check
            if (!isFirstSnapshot) {
              localStorage.removeItem(ACTIVE_ROLE_KEY);
              localStorage.setItem(FORCED_LOGOUT_KEY, 'You have been signed out because this account was used on another device.');
              signOut(auth);
              return;
            }
          }

          if (!activeSessionId) {
            setDoc(userRef, {
              activeSessionId: sessionId,
              activeSessionAt: serverTimestamp(),
            }, { merge: true }).catch(() => {});
          }

          const r = normaliseRoles(profile);
          const saved = localStorage.getItem(ACTIVE_ROLE_KEY);
          setUser(u);
          setRoles(r);
          setActiveRoleState(pickActiveRole(r, saved));
          setApproved(profile?.approved ?? null);
          setBooting(false);
          isFirstSnapshot = false;
        },
        () => {
          setUser(u);
          setRoles([]);
          setActiveRoleState(null);
          setApproved(null);
          setBooting(false);
        },
      );
    });

    return () => {
      if (profileUnsub) profileUnsub();
      unsub();
    };
  }, []);

  const logout = async () => {
    localStorage.removeItem(ACTIVE_ROLE_KEY);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{
      user,
      roles,
      activeRole,
      setActiveRole,
      role: activeRole,
      approved,
      booting,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

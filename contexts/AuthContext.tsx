import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

interface UserProfile {
  role?: string;
  approved?: boolean;
}

interface AuthContextValue {
  user: User | null;
  role: string | null;
  approved: boolean | null;
  booting: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  role: null,
  approved: null,
  booting: true,
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [approved, setApproved] = useState<boolean | null>(null);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUser(null);
        setRole(null);
        setApproved(null);
        setBooting(false);
        return;
      }

      try {
        const snap = await getDoc(doc(db, 'users', u.uid));
        const profile = snap.exists() ? (snap.data() as UserProfile) : null;
        // Set all state after the await so React batches into one render
        setUser(u);
        setRole(profile?.role ?? null);
        setApproved(profile?.approved ?? null);
      } catch {
        setUser(u);
        setRole(null);
        setApproved(null);
      } finally {
        setBooting(false);
      }
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, role, approved, booting, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

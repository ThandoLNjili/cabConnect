import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import DriverDashboard from './components/DriverDashboard';
import ClientBooking from './components/ClientBooking';
import DriverLogin from './components/DriverLogin';
import DriverRegister from './components/DriverRegister';
import PendingApproval from './components/PendingApproval';
import AdminDashboard from './components/AdminDashboard';

import { auth, db } from './firebase';

type View = 'client' | 'driverLogin' | 'driver' | 'driverRegister' | 'pendingApproval' | 'admin';

type UserProfile = {
  role?: string;
  displayName?: string;
  approved?: boolean;
};

function App() {
  const [view, setView] = useState<View>('client');
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [approved, setApproved] = useState<boolean | null>(null);
  const [booting, setBooting] = useState(true);

  // Listen for driver-register event from DriverLogin
  useEffect(() => {
    const handler = () => setView('driverRegister');
    window.addEventListener('driver-register', handler);
    return () => window.removeEventListener('driver-register', handler);
  }, []);

  // Keep session alive and verify role
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);

      if (!u) {
        setRole(null);
        setBooting(false);
        return;
      }

      try {
        const snap = await getDoc(doc(db, 'users', u.uid));
        const profile = (snap.exists() ? (snap.data() as UserProfile) : null);
        setRole(profile?.role ?? null);
        setApproved(profile?.approved ?? null);

        // Route based on role and approval status.
        if (profile?.role === 'admin') {
          setView('admin');
        } else if (profile?.role === 'driver') {
          if (profile.approved === false) {
            setView('pendingApproval');
          } else {
            setView('driver');
          }
        } else {
          setView('client');
        }
      } catch {
        setRole(null);
      } finally {
        setBooting(false);
      }
    });

    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDriverLoginRequest = () => {
    if (user && role === 'driver') {
      setView(approved === false ? 'pendingApproval' : 'driver');
      return;
    }
    setView('driverLogin');
  };

  const handleDriverRegisterRequest = () => {
    setView('driverRegister');
  };

  const handleLogout = async () => {
    await signOut(auth);
    setView('client');
  };

  if (booting) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Starting CabConnect…
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900">
      {view === 'client' && (
        <ClientBooking 
          onDriverLoginClick={handleDriverLoginRequest}
        />
      )}

      {view === 'driverLogin' && (
        <DriverLogin
          onSuccess={() => setView('driver')}
          onPending={() => setView('pendingApproval')}
          onCancel={() => setView('client')}
        />
      )}

      {view === 'driverRegister' && (
        <DriverRegister
          onSuccess={() => setView('driverLogin')}
          onCancel={() => setView('driverLogin')}
        />
      )}

      {view === 'driver' && (
        <DriverDashboard onLogout={handleLogout} />
      )}

      {view === 'pendingApproval' && (
        <PendingApproval onLogout={handleLogout} />
      )}

      {view === 'admin' && (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;

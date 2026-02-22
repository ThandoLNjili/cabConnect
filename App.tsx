import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import DriverDashboard from './components/DriverDashboard';
import ClientBooking from './components/ClientBooking';
import DriverLogin from './components/DriverLogin';
import DriverRegister from './components/DriverRegister';

import { auth, db } from './firebase';

type View = 'client' | 'driverLogin' | 'driver' | 'driverRegister';

type UserProfile = {
  role?: string;
  displayName?: string;
};

function App() {
  const [view, setView] = useState<View>('client');
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
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

        // If user is not driver, keep them out of driver view.
        if (profile?.role !== 'driver' && view === 'driver') {
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
    // If already logged in as driver, go straight in.
    if (user && role === 'driver') {
      setView('driver');
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
    </div>
  );
}

export default App;

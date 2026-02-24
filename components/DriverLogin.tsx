import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { Lock, Mail, KeyRound } from 'lucide-react';

type UserProfile = {
  role?: string;
  displayName?: string;
  approved?: boolean;
};

const DriverLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);

      // Enforce "driver" role via Firestore user profile.
      const profileSnap = await getDoc(doc(db, 'users', cred.user.uid));
      const profile = (profileSnap.exists() ? (profileSnap.data() as UserProfile) : null);

      if (profile?.role === 'admin') {
        navigate('/admin', { replace: true });
        return;
      }

      if (!profile || profile.role !== 'driver') {
        await signOut(auth);
        throw new Error('This account is not a driver account.');
      }

      if (profile.approved === false) {
        navigate('/pending', { replace: true });
        return;
      }

      navigate('/driver', { replace: true });
    } catch (err: any) {
      const msg =
        err?.message?.includes('auth/invalid-credential') ? 'Incorrect email or password.' :
          err?.message?.includes('auth/too-many-requests') ? 'Too many attempts. Try again later.' :
            err?.message || 'Login failed.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-2 mb-2">
          <Lock className="w-5 h-5" />
          <h1 className="text-xl font-semibold">Driver Login</h1>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to access the Driver Dashboard.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </span>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="driver@example.com"
              required
              autoComplete="email"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <KeyRound className="w-4 h-4" /> Password
            </span>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </label>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full rounded-xl border border-gray-200 py-2 font-medium"
          >
            Back
          </button>

          <button
            type="button"
            onClick={() => navigate('/driver/register')}
            className="w-full rounded-xl border border-blue-200 py-2 font-medium text-blue-700 mt-2"
          >
            Register as Driver
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverLogin;


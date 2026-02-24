import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Lock, Mail, KeyRound, User } from 'lucide-react';

interface DriverRegisterProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const DriverRegister: React.FC<DriverRegisterProps> = ({ onSuccess, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await setDoc(doc(db, 'users', cred.user.uid), {
        role: 'driver',
        approved: false,
        displayName,
        phone,
        createdAt: serverTimestamp(),
      });
      onSuccess();
    } catch (err: any) {
      setError(err?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-2 mb-2">
          <Lock className="w-5 h-5" />
          <h1 className="text-xl font-semibold">Register as Driver</h1>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" /> Name
            </span>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring"
              type="text"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              placeholder="Driver Name"
              required
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </span>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Phone
            </span>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
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
            {loading ? 'Registering…' : 'Register'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full rounded-xl border border-gray-200 py-2 font-medium"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverRegister;

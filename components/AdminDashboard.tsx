import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { ShieldCheck, UserX, LogOut, Users, User } from 'lucide-react';

interface DriverProfile {
  uid: string;
  displayName: string;
  phone: string;
  email?: string;
  createdAt?: any;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const adminUid = user?.uid ?? null;
  const [pending, setPending] = useState<DriverProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionUid, setActionUid] = useState<string | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'users'),
      where('role', '==', 'driver'),
      where('approved', '==', false)
    );

    const unsub = onSnapshot(q, (snap) => {
      setPending(
        snap.docs.map(d => ({ uid: d.id, ...(d.data() as Omit<DriverProfile, 'uid'>) }))
      );
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const approve = async (uid: string) => {
    setActionUid(uid);
    try {
      await updateDoc(doc(db, 'users', uid), {
        approved: true,
        approvedAt: serverTimestamp(),
        approvedBy: adminUid ?? 'admin',
      });
    } finally {
      setActionUid(null);
    }
  };

  const reject = async (uid: string) => {
    setActionUid(uid);
    try {
      await deleteDoc(doc(db, 'users', uid));
    } finally {
      setActionUid(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h1 className="text-xl font-semibold">Admin — Driver Approvals</h1>
          </div>
          <button
            onClick={async () => { await logout(); navigate('/', { replace: true }); }}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* Admin Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 flex items-center gap-4">
          <div className="bg-emerald-100 rounded-full p-3 shrink-0">
            <User className="w-7 h-7 text-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-lg truncate">
              {user?.displayName || 'Admin'}
            </p>
            <p className="text-sm text-gray-500 truncate">{user?.email || '—'}</p>
            <p className="font-mono text-xs text-gray-400 truncate select-all">{adminUid}</p>
          </div>
          <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Admin
          </span>
        </div>

        {/* Pending list */}
        {loading ? (
          <p className="text-gray-400 text-sm text-center mt-16">Loading…</p>
        ) : pending.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <Users className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">No drivers pending approval.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {pending.map(driver => (
              <div key={driver.uid} className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
                <div className="bg-emerald-100 rounded-full p-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{driver.displayName || 'Unknown'}</p>
                  <p className="text-sm text-gray-500">{driver.phone || '—'}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    disabled={actionUid === driver.uid}
                    onClick={() => approve(driver.uid)}
                    className="flex items-center gap-1 rounded-xl bg-emerald-600 text-white px-3 py-1.5 text-sm font-medium disabled:opacity-50 hover:bg-emerald-700"
                  >
                    <ShieldCheck className="w-4 h-4" /> Approve
                  </button>
                  <button
                    disabled={actionUid === driver.uid}
                    onClick={() => reject(driver.uid)}
                    className="flex items-center gap-1 rounded-xl border border-red-200 text-red-600 px-3 py-1.5 text-sm font-medium disabled:opacity-50 hover:bg-red-50"
                  >
                    <UserX className="w-4 h-4" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

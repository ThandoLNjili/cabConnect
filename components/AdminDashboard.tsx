import React, { useEffect, useState } from 'react';
import {
  collection, query, where, onSnapshot, updateDoc, deleteDoc, doc, serverTimestamp, orderBy,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import {
  ShieldCheck, UserX, LogOut, Users, User, ChevronDown, ChevronUp,
  Phone, Mail, Clock, Wifi, WifiOff, AlertCircle,
} from 'lucide-react';

const ROLE_LABELS: Record<string, string> = { driver: '🚗 Driver', admin: '🛡️ Admin' };
const ROLE_PATHS: Record<string, string> = { driver: '/driver', admin: '/admin' };

const ALL_ROLES = ['driver', 'admin'] as const;

interface UserRecord {
  uid: string;
  displayName: string;
  phone: string;
  email?: string;
  role?: string;       // legacy single-role field
  roles?: string[];    // new multi-role field
  _roles: string[];    // normalised (computed on snapshot read)
  approved?: boolean;
  available?: boolean;
  createdAt?: any;
  approvedAt?: any;
  approvedBy?: string;
  fcmToken?: string;
}

/* ─── Expandable user card ─── */
const UserCard: React.FC<{
  u: UserRecord;
  actionUid: string | null;
  onApprove: (uid: string) => void;
  onReject: (uid: string) => void;
}> = ({ u, actionUid, onApprove, onReject }) => {
  const [open, setOpen] = useState(false);
  const [savingRole, setSavingRole] = useState(false);

  const toggleRole = async (r: string) => {
    setSavingRole(true);
    try {
      const current = u._roles;
      const updated = current.includes(r)
        ? current.filter(x => x !== r)
        : [...current, r];
      if (updated.length === 0) return; // must keep at least one role
      await updateDoc(doc(db, 'users', u.uid), {
        roles: updated,
        role: updated[0],  // keep legacy field in sync
      });
    } finally {
      setSavingRole(false);
    }
  };

  const fmtDate = (ts: any) => {
    if (!ts) return '—';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' })
      + ' · ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const statusBadge = () => {
    if (u._roles.includes('admin') && !u._roles.includes('driver'))
      return <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Admin</span>;
    if (u._roles.includes('admin') && u._roles.includes('driver'))
      return <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Admin+Driver</span>;
    if (!u.approved) return <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Pending</span>;
    if (u.available) return <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">Online</span>;
    return <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">Offline</span>;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Summary row — always visible */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition"
      >
        <div className={`rounded-full p-2 shrink-0 ${u._roles.includes('admin') ? 'bg-emerald-100' : u.approved ? 'bg-blue-100' : 'bg-amber-100'}`}>
          <User className={`w-5 h-5 ${u._roles.includes('admin') ? 'text-emerald-600' : u.approved ? 'text-blue-600' : 'text-amber-600'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 truncate">{u.displayName || 'Unnamed'}</p>
          <p className="text-xs text-gray-400 truncate">{u.phone || u.email || '—'}</p>
        </div>
        {statusBadge()}
        {open
          ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
        }
      </button>

      {/* Expanded details */}
      {open && (
        <div className="border-t px-4 py-3 bg-gray-50 space-y-2 text-sm text-gray-600">
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400 text-xs uppercase tracking-wide">Name</span>
            </div>
            <span className="font-medium text-gray-800 truncate">{u.displayName || '—'}</span>

            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400 text-xs uppercase tracking-wide">Email</span>
            </div>
            <span className="text-gray-800 truncate">{u.email || '—'}</span>

            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400 text-xs uppercase tracking-wide">Phone</span>
            </div>
            <span className="text-gray-800">{u.phone || '—'}</span>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400 text-xs uppercase tracking-wide">Roles</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {ALL_ROLES.map(r => {
                const active = u._roles.includes(r);
                const isLast = u._roles.length === 1 && active;
                return (
                  <button
                    key={r}
                    disabled={savingRole || isLast}
                    onClick={(e) => { e.stopPropagation(); toggleRole(r); }}
                    title={isLast ? 'Must keep at least one role' : active ? `Remove ${r} role` : `Add ${r} role`}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border transition ${
                      active
                        ? r === 'admin'
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400'
                    } disabled:opacity-40`}
                  >
                    {savingRole ? '…' : (active ? '✓ ' : '+ ')}{r}
                  </button>
                );
              })}
            </div>

            {u._roles.includes('driver') && (
              <>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-gray-400 text-xs uppercase tracking-wide">Approved</span>
                </div>
                <span className={`font-medium ${u.approved ? 'text-green-700' : 'text-amber-600'}`}>
                  {u.approved ? 'Yes' : 'No'}
                </span>

                <div className="flex items-center gap-2">
                  {u.available ? <Wifi className="w-3.5 h-3.5 text-green-500" /> : <WifiOff className="w-3.5 h-3.5 text-gray-400" />}
                  <span className="text-gray-400 text-xs uppercase tracking-wide">Status</span>
                </div>
                <span className={u.available ? 'text-green-700 font-medium' : 'text-gray-500'}>
                  {u.available ? 'Online' : 'Offline'}
                </span>
              </>
            )}

            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400 text-xs uppercase tracking-wide">Registered</span>
            </div>
            <span className="text-gray-800">{fmtDate(u.createdAt)}</span>

            {u.approvedAt && (
              <>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-gray-400 text-xs uppercase tracking-wide">Approved</span>
                </div>
                <span className="text-gray-800">{fmtDate(u.approvedAt)}</span>
              </>
            )}
          </div>

          <div className="text-xs text-gray-400 pt-1 break-all">UID: {u.uid}</div>

          {u._roles.includes('driver') && u.fcmToken && (
            <p className="text-xs text-gray-400">Push token registered ✓</p>
          )}

          {/* Approve / Reject actions for pending drivers */}
          {u._roles.includes('driver') && !u.approved && (
            <div className="flex gap-2 pt-2 border-t">
              <button
                disabled={actionUid === u.uid}
                onClick={(e) => { e.stopPropagation(); onApprove(u.uid); }}
                className="flex items-center gap-1 rounded-xl bg-emerald-600 text-white px-3 py-1.5 text-sm font-medium disabled:opacity-50 hover:bg-emerald-700 transition"
              >
                <ShieldCheck className="w-4 h-4" /> Approve
              </button>
              <button
                disabled={actionUid === u.uid}
                onClick={(e) => { e.stopPropagation(); onReject(u.uid); }}
                className="flex items-center gap-1 rounded-xl border border-red-200 text-red-600 px-3 py-1.5 text-sm font-medium disabled:opacity-50 hover:bg-red-50 transition"
              >
                <UserX className="w-4 h-4" /> Reject
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ─── Admin Dashboard ─── */
const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout, roles, activeRole, setActiveRole, approved } = useAuth();
  const adminUid = user?.uid ?? null;

  const [allUsers, setAllUsers] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionUid, setActionUid] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'admin'>('all');

  // Subscribe to ALL users
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'users'), orderBy('createdAt', 'desc')),
      (snap) => {
        setAllUsers(snap.docs.map(d => {
          const data = d.data() as Omit<UserRecord, 'uid' | '_roles'>;
          const _roles = Array.isArray(data.roles) && data.roles.length > 0
            ? data.roles
            : data.role ? [data.role] : [];
          return { uid: d.id, ...data, _roles };
        }));
        setLoading(false);
      }
    );
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

  const pendingDrivers = allUsers.filter(u => u._roles.includes('driver') && !u.approved);
  const approvedDrivers = allUsers.filter(u => u._roles.includes('driver') && u.approved);
  const admins = allUsers.filter(u => u._roles.includes('admin'));

  const filtered = filter === 'all' ? allUsers
    : filter === 'pending' ? pendingDrivers
    : filter === 'approved' ? approvedDrivers
    : admins;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <button
            onClick={async () => { await logout(); navigate('/', { replace: true }); }}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* Admin Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
          <div className="p-4 flex items-center gap-4">
            <div className="bg-emerald-100 rounded-full p-3 shrink-0">
              <User className="w-7 h-7 text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-lg truncate">
                {user?.displayName || 'Admin'}
              </p>
              <p className="text-sm text-gray-500 truncate">{user?.email || '—'}</p>
            </div>
            <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
              Admin
            </span>
          </div>
          {roles.length >= 2 && (
            <div className="border-t flex">
              {roles.map(r => (
                <button
                  key={r}
                  onClick={() => {
                    if (r === 'driver' && approved === false) return;
                    setActiveRole(r);
                    navigate(ROLE_PATHS[r] ?? '/');
                  }}
                  className={`flex-1 py-2 text-xs font-semibold transition ${
                    r === activeRole
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {ROLE_LABELS[r] ?? r}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stat pills */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {[
            { key: 'all' as const, label: 'All', count: allUsers.length, color: 'bg-gray-800 text-white' },
            { key: 'pending' as const, label: 'Pending', count: pendingDrivers.length, color: 'bg-amber-500 text-white' },
            { key: 'approved' as const, label: 'Drivers', count: approvedDrivers.length, color: 'bg-blue-500 text-white' },
            { key: 'admin' as const, label: 'Admins', count: admins.length, color: 'bg-emerald-500 text-white' },
          ].map(({ key, label, count, color }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-xl py-2 text-center transition text-sm font-medium ${
                filter === key ? color : 'bg-white text-gray-500 shadow-sm hover:bg-gray-100'
              }`}
            >
              <span className="block text-lg font-bold leading-none mb-0.5">{count}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Pending alert banner */}
        {pendingDrivers.length > 0 && filter === 'all' && (
          <button
            onClick={() => setFilter('pending')}
            className="w-full mb-4 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 text-left hover:bg-amber-100 transition"
          >
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-sm text-amber-800 font-medium">
              {pendingDrivers.length} driver{pendingDrivers.length > 1 ? 's' : ''} awaiting approval
            </span>
            <ChevronDown className="w-4 h-4 text-amber-400 ml-auto" />
          </button>
        )}

        {/* User list */}
        {loading ? (
          <p className="text-gray-400 text-sm text-center mt-16">Loading…</p>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <Users className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">No users in this category.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map(u => (
              <UserCard key={u.uid} u={u} actionUid={actionUid} onApprove={approve} onReject={reject} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

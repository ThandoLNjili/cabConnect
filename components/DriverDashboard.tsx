import { registerFCMToken } from '../utils/registerFCMToken';

import React, { useEffect, useRef, useState } from 'react';
import { collection, doc, addDoc, onSnapshot, query, orderBy, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db, auth } from '../firebase';
import { RideRequest } from '../types';
import { Power, MapPin, Phone, Clock, LogOut, User, MessageCircle, Send, History, ChevronDown, ChevronUp, Car } from 'lucide-react';

const ROLE_LABELS: Record<string, string> = { driver: '🚗 Driver', admin: '🛡️ Admin' };
const ROLE_PATHS: Record<string, string> = { driver: '/driver', admin: '/admin' };

interface ChatMessage {
  id: string;
  text: string;
  senderName: string;
  senderType: 'client' | 'driver';
  timestamp: any;
}

interface DriverChatPanelProps {
  requestId: string;
  driverName: string;
}

const DriverChatPanel: React.FC<DriverChatPanelProps> = ({ requestId, driverName }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'requests', requestId, 'messages'),
      orderBy('timestamp', 'asc')
    );
    return onSnapshot(q, (snap) => {
      setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() } as ChatMessage)));
    });
  }, [requestId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setSending(true);
    try {
      await addDoc(collection(db, 'requests', requestId, 'messages'), {
        text: text.trim(),
        senderName: driverName,
        senderType: 'driver',
        timestamp: serverTimestamp(),
      });
      setText('');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="mt-3 border-t pt-3">
      <div className="flex items-center gap-1.5 mb-2 text-sm font-medium text-gray-600">
        <MessageCircle className="w-4 h-4" /> Chat with passenger
      </div>
      <div className="bg-gray-50 rounded-xl overflow-hidden">
        <div className="overflow-y-auto max-h-40 p-3 space-y-2">
          {messages.length === 0 && (
            <p className="text-xs text-gray-400 text-center">No messages yet.</p>
          )}
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.senderType === 'driver' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-3 py-1.5 rounded-2xl text-sm ${
                msg.senderType === 'driver'
                  ? 'bg-blue-600 text-white rounded-br-sm'
                  : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
              }`}>
                {msg.senderType === 'client' && (
                  <p className="text-xs font-semibold mb-0.5 text-emerald-700">{msg.senderName}</p>
                )}
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <form onSubmit={send} className="flex gap-2 p-2 border-t bg-white">
          <input
            className="flex-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Message passenger…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            disabled={sending || !text.trim()}
            className="bg-blue-600 text-white p-1.5 rounded-lg disabled:opacity-50 hover:bg-blue-700 transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

interface DriverProfile {
  displayName: string;
  phone: string;
  email: string;
}

const DriverDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout, roles, activeRole, setActiveRole, approved } = useAuth();
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [profile, setProfile] = useState<DriverProfile | null>(null);
  const [requests, setRequests] = useState<RideRequest[]>([]);
  const [history, setHistory] = useState<RideRequest[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Subscribe to this driver's availability and register FCM token
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    registerFCMToken();
    const userRef = doc(db, 'users', user.uid);
    const unsub = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setIsOnline(!!data.available);
        setProfile({
          displayName: data.displayName || 'Driver',
          phone: data.phone || '—',
          email: user.email || '—',
        });
      } else {
        setIsOnline(false);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Subscribe to ride requests (pending and accepted by this driver)
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    const q = query(
      collection(db, 'requests'),
      orderBy('timestamp', 'desc')
    );
    const unsubRequests = onSnapshot(q, (snapshot) => {
      const all: RideRequest[] = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as RideRequest));
      setRequests(all.filter(req => req.status === 'pending' || (req.status === 'accepted' && req.driverId === user.uid)));
      setHistory(all.filter(req => req.status === 'completed' && req.driverId === user.uid));
    });
    return () => unsubRequests();
  }, []);

  const toggleStatus = async () => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('Not authenticated');
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { available: !isOnline, lastAvailableUpdate: serverTimestamp() });
    } catch (err) {
      console.error('Error toggling availability:', err);
      alert('Failed to update availability. Check internet connection.');
    }
  };

  const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    // Handle Firestore Timestamp or JS Date
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Connecting to HQ...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-800">Driver Console</h1>
          </div>
          <button
            onClick={async () => { await logout(); navigate('/', { replace: true }); }}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* Driver Profile Card */}
        {profile && (
          <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
            <div className="p-4 flex items-center gap-4">
              <div className="bg-blue-100 rounded-full p-3 shrink-0">
                <User className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-lg truncate">{profile.displayName}</p>
                <p className="text-sm text-gray-500 truncate">{profile.email}</p>
                <p className="text-sm text-gray-500">{profile.phone}</p>
              </div>
              <span className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${
                isOnline ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
              }`}>
                {isOnline ? 'Online' : 'Offline'}
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
        )}

        {/* Status Toggle */}
        <div className="mb-6">
          <button
            onClick={toggleStatus}
            className={`w-full py-8 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-all duration-300 active:scale-95 ${
              isOnline
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-900'
            }`}
          >
            <Power size={40} className={`mb-2 ${isOnline ? 'text-white' : 'text-gray-500'}`} />
            <span className="text-xl font-bold uppercase tracking-wider">
              {isOnline ? 'You are Available' : 'You are Unavailable'}
            </span>
            <span className="text-sm opacity-70 mt-1">
              {isOnline ? 'Receiving new requests' : 'Tap to start shift'}
            </span>
          </button>
        </div>

        {/* Ride Requests */}
        <div className="mb-2 flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <h2 className="text-base font-semibold text-gray-700">Ride Requests</h2>
        </div>
        <div className="space-y-3 mb-6">
          {requests.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <Clock className="w-8 h-8 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">No active requests.</p>
            </div>
          ) : (
            requests.map((req) => (
              <div key={req.id} className={`bg-white rounded-2xl shadow-sm overflow-hidden border-l-4 ${req.status === 'pending' ? 'border-blue-500' : 'border-emerald-500'}`}>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">{req.customerName}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      req.status === 'pending' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {req.status === 'pending' ? 'Pending' : 'Accepted'}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wide font-medium block">Pickup</span>
                        {req.pickup}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wide font-medium block">Dropoff</span>
                        {req.dropoff}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t">
                      <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                      <a href={`tel:${req.phone}`} className="text-blue-600 hover:underline">{req.phone}</a>
                      <span className="ml-auto text-xs text-gray-400">{formatTime(req.timestamp)}</span>
                    </div>
                  </div>
                  {req.status === 'pending' ? (
                    <div className="mt-4 flex justify-end">
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
                        onClick={async () => {
                          const user = auth.currentUser;
                          if (!user) return alert('Not authenticated');
                          await updateDoc(doc(db, 'requests', req.id!), {
                            status: 'accepted',
                            driverId: user.uid,
                            acceptedAt: serverTimestamp()
                          });
                        }}
                      >
                        Accept Ride
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-emerald-700 font-medium text-sm">✓ Accepted by you</span>
                        <button
                          className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition"
                          onClick={async () => {
                            if (!window.confirm('Mark this ride as completed?')) return;
                            await updateDoc(doc(db, 'requests', req.id!), {
                              status: 'completed',
                              completedAt: serverTimestamp()
                            });
                          }}
                        >
                          Complete Ride
                        </button>
                      </div>
                      <DriverChatPanel requestId={req.id!} driverName={profile?.displayName || 'Driver'} />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Ride History */}
        <button
          onClick={() => setHistoryOpen(o => !o)}
          className="w-full flex items-center justify-between bg-white rounded-2xl shadow-sm px-4 py-3 text-gray-700 hover:bg-gray-50 transition"
        >
          <span className="flex items-center gap-2 font-semibold text-sm">
            <History className="w-4 h-4 text-gray-400" />
            Ride History
            <span className="text-xs font-normal bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">{history.length}</span>
          </span>
          {historyOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </button>

        {historyOpen && (
          <div className="mt-2 space-y-2">
            {history.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center text-gray-400 text-sm">
                No completed rides yet.
              </div>
            ) : (
              history.map((req) => (
                <div key={req.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border-l-4 border-gray-200">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-gray-800">{req.customerName}</p>
                      <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full">Completed</span>
                    </div>
                    <div className="space-y-1.5 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span><span className="text-xs text-gray-400 uppercase tracking-wide font-medium">From </span>{req.pickup}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        <span><span className="text-xs text-gray-400 uppercase tracking-wide font-medium">To </span>{req.dropoff}</span>
                      </div>
                      {req.completedAt && (
                        <p className="text-xs text-gray-400 pt-1">
                          {(() => {
                            const d = (req.completedAt as any).toDate ? (req.completedAt as any).toDate() : new Date(req.completedAt as any);
                            return d.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' }) + ' · ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                          })()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default DriverDashboard;

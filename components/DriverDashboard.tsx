import { registerFCMToken } from '../utils/registerFCMToken';

import React, { useEffect, useRef, useState } from 'react';
import { collection, doc, addDoc, onSnapshot, query, orderBy, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db, auth } from '../firebase';
import { RideRequest } from '../types';
import { Power, MapPin, Phone, Clock, LogOut, User, MessageCircle, Send } from 'lucide-react';

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
  const { logout } = useAuth();
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [profile, setProfile] = useState<DriverProfile | null>(null);
  const [requests, setRequests] = useState<RideRequest[]>([]);
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
      const fetchedRequests: RideRequest[] = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as RideRequest))
        .filter(req => req.status === 'pending' || (req.status === 'accepted' && req.driverId === user.uid));
      setRequests(fetchedRequests);
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">Driver Console</h1>
        <button 
          onClick={async () => { await logout(); navigate('/', { replace: true }); }}
          className="text-gray-500 hover:text-red-500 transition-colors"
        >
          <LogOut size={24} />
        </button>
      </header>

      <main className="flex-1 p-4 max-w-2xl mx-auto w-full">
        {/* Driver Profile Card */}
        {profile && (
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 flex items-center gap-4">
            <div className="bg-gray-100 rounded-full p-3 shrink-0">
              <User className="w-7 h-7 text-gray-500" />
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
        )}

        {/* Status Toggle (per-driver) */}
        <div className="mb-8">
          <button
            onClick={toggleStatus}
            className={`w-full py-8 rounded-3xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 transform active:scale-95 ${
              isOnline 
                ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-200' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-900 shadow-gray-400'
            }`}
          >
            <Power size={48} className={`mb-2 ${isOnline ? 'text-white' : 'text-gray-500'}`} />
            <span className="text-2xl font-bold uppercase tracking-wider">
              {isOnline ? 'You are Available' : 'You are Unavailable'}
            </span>
            <span className="text-sm opacity-80 mt-1">
              {isOnline ? 'Receiving new requests' : 'Tap to start shift'}
            </span>
          </button>
        </div>

        {/* Ride Requests List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <Clock size={20} />
            Ride Requests
          </h2>
          {requests.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center text-gray-400">
              No requests.
            </div>
          ) : (
            requests.map((req) => (
              <div key={req.id} className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${req.status === 'pending' ? 'border-blue-500' : 'border-green-500'} animate-fade-in`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-gray-800">{req.customerName}</h3>
                  <span className="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                    {formatTime(req.timestamp)}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-bold block">Pickup</span>
                      {req.pickup}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-bold block">Dropoff</span>
                      {req.dropoff}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 pt-2 border-t mt-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${req.phone}`} className="text-blue-600 hover:underline">
                      {req.phone}
                    </a>
                  </div>
                </div>
                {req.status === 'pending' ? (
                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
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
                      <span className="text-green-700 font-semibold text-sm">✓ Ride accepted by you</span>
                      <button
                        className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-emerald-700 transition text-sm"
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
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default DriverDashboard;

import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  doc, onSnapshot, getDoc,
  collection, addDoc, query, orderBy, serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { Car, MapPin, Navigation, Phone, MessageCircle, Send, Loader2, CheckCircle2, ArrowLeft, Star } from 'lucide-react';
import { RideRequest, DriverProfile } from '../types';

interface ChatMessage {
  id: string;
  text: string;
  senderName: string;
  senderType: 'client' | 'driver';
  timestamp: any;
}

const RideStatus: React.FC = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const navigate = useNavigate();

  const [ride, setRide] = useState<RideRequest | null>(null);
  const [driver, setDriver] = useState<DriverProfile | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chatText, setChatText] = useState('');
  const [sending, setSending] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Subscribe to ride request
  useEffect(() => {
    if (!requestId) return;
    const unsub = onSnapshot(doc(db, 'requests', requestId), (snap) => {
      if (!snap.exists()) { setNotFound(true); return; }
      setRide({ id: snap.id, ...snap.data() } as RideRequest);
    });
    return () => unsub();
  }, [requestId]);

  // Fetch driver profile when ride is accepted
  useEffect(() => {
    if (!ride?.driverId) { setDriver(null); return; }
    getDoc(doc(db, 'users', ride.driverId)).then((snap) => {
      if (snap.exists()) setDriver(snap.data() as DriverProfile);
    });
  }, [ride?.driverId]);

  // Subscribe to chat messages
  useEffect(() => {
    if (!requestId) return;
    const q = query(
      collection(db, 'requests', requestId, 'messages'),
      orderBy('timestamp', 'asc')
    );
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() } as ChatMessage)));
    });
    return () => unsub();
  }, [requestId]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatText.trim() || !requestId || !ride) return;
    setSending(true);
    try {
      await addDoc(collection(db, 'requests', requestId, 'messages'), {
        text: chatText.trim(),
        senderName: ride.customerName,
        senderType: 'client',
        timestamp: serverTimestamp(),
      });
      setChatText('');
    } finally {
      setSending(false);
    }
  };

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <p className="text-gray-500 mb-4">Ride not found or has expired.</p>
        <button onClick={() => navigate('/')} className="text-emerald-600 underline">Book a new ride</button>
      </div>
    );
  }

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-emerald-600 w-10 h-10" />
      </div>
    );
  }

  const isPending = ride.status === 'pending';
  const isAccepted = ride.status === 'accepted';
  const isCompleted = ride.status === 'completed';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-emerald-600 text-white p-4 shadow-lg rounded-b-[2rem]">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <button onClick={() => navigate('/')} className="text-white/80 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <Car className="w-6 h-6" />
          <h1 className="text-lg font-bold">Ride Status</h1>
        </div>
      </header>

      <main className="flex-1 p-4 max-w-md mx-auto w-full space-y-4">

        {/* Ride summary */}
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
          <div className="flex items-start gap-3 text-gray-700">
            <Navigation className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs text-gray-400 uppercase font-bold block">Pickup</span>
              {ride.pickup}
            </div>
          </div>
          <div className="flex items-start gap-3 text-gray-700">
            <MapPin className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs text-gray-400 uppercase font-bold block">Drop-off</span>
              {ride.dropoff}
            </div>
          </div>
        </div>

        {/* Status card */}
        {isPending && (
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center gap-3">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <Car className="w-8 h-8 text-emerald-600" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Looking for a driver…</h2>
            <p className="text-sm text-gray-500">We're finding the nearest available driver. This usually takes a minute.</p>
          </div>
        )}

        {isAccepted && driver && (
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h2 className="font-semibold text-gray-800">Driver on the way</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 rounded-full p-3 shrink-0">
                <Car className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900">{driver.displayName}</p>
                <p className="text-sm text-gray-500">{driver.phone}</p>
              </div>
            </div>
            <a
              href={`tel:${driver.phone}`}
              className="mt-4 flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition"
            >
              <Phone className="w-4 h-4" /> Call Driver
            </a>
          </div>
        )}

        {/* Completed state */}
        {isCompleted && (
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <Star className="w-8 h-8 text-emerald-500" fill="currentColor" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Ride Complete!</h2>
            <p className="text-sm text-gray-500">Thanks for riding with us, {ride.customerName}. Hope the trip was great!</p>
            <button
              onClick={() => navigate('/')}
              className="mt-2 w-full bg-emerald-600 text-white py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition"
            >
              Book Another Ride
            </button>
          </div>
        )}

        {/* Chat — visible once driver is assigned */}
        {isAccepted && (
          <div className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden" style={{ minHeight: '280px' }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="font-medium text-gray-800 text-sm">Chat with driver</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 max-h-64">
              {messages.length === 0 && (
                <p className="text-xs text-gray-400 text-center mt-6">No messages yet. Say hi!</p>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.senderType === 'client' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm ${
                    msg.senderType === 'client'
                      ? 'bg-emerald-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}>
                    {msg.senderType === 'driver' && (
                      <p className="text-xs font-semibold mb-0.5 text-emerald-700">{msg.senderName}</p>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="flex gap-2 p-3 border-t">
              <input
                className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-emerald-200"
                placeholder="Type a message…"
                value={chatText}
                onChange={(e) => setChatText(e.target.value)}
              />
              <button
                type="submit"
                disabled={sending || !chatText.trim()}
                className="bg-emerald-600 text-white p-2 rounded-xl disabled:opacity-50 hover:bg-emerald-700 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {!isCompleted && (
          <button
            onClick={() => navigate('/')}
            className="w-full text-center text-sm text-gray-400 hover:text-gray-600 py-2"
          >
            ← Book another ride
          </button>
        )}
      </main>
    </div>
  );
};

export default RideStatus;

import { registerFCMToken } from '../utils/registerFCMToken';

import React, { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query, orderBy, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db, auth } from '../firebase';
import { RideRequest } from '../types';
import { Power, MapPin, Phone, Clock, LogOut } from 'lucide-react';

const DriverDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isOnline, setIsOnline] = useState<boolean>(false);
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
                        await updateDoc(doc(db, 'requests', req.id), {
                          status: 'accepted',
                          driverId: user.uid,
                          acceptedAt: serverTimestamp()
                        });
                        alert('Ride accepted!');
                      }}
                    >
                      Accept Ride
                    </button>
                  </div>
                ) : (
                  <div className="mt-4 text-green-700 font-semibold text-right">
                    Ride accepted by you
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

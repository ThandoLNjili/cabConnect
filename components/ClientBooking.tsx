import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { Car, MapPin, Navigation, Send, Loader2 } from 'lucide-react';

// Legacy WhatsApp driver number kept for reference (no longer used in flow)
const DRIVER_WHATSAPP = "27611996849"; 

const ClientBooking: React.FC = () => {
  const navigate = useNavigate();
  const [isDriverAvailable, setIsDriverAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    dropoff: ''
  });

  // Check if any driver is available
  useEffect(() => {
    const checkAvailableDrivers = async () => {
      const q = query(collection(db, 'users'), where('role', '==', 'driver'), where('available', '==', true));
      const snapshot = await getDocs(q);
      setIsDriverAvailable(!snapshot.empty);
      setLoading(false);
    };
    checkAvailableDrivers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.pickup || !formData.dropoff || !formData.phone) return;
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'requests'), {
        customerName: formData.name,
        pickup: formData.pickup,
        dropoff: formData.dropoff,
        phone: formData.phone,
        status: 'pending',
        timestamp: new Date()
      });
      alert('Your ride request has been submitted! You will be notified when a driver accepts.');
      setFormData({ name: '', phone: '', pickup: '', dropoff: '' });
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-emerald-600 w-10 h-10" />
      </div>
    );
  }

  // View: No drivers available
  if (!isDriverAvailable) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Car className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Unavailable</h2>
            <p className="text-gray-500 mb-8">
              Our drivers are currently unavailable. Please check back later or call us directly if it's urgent.
            </p>
          <div className="h-1 w-24 bg-gray-200 mx-auto rounded-full"></div>
        </div>
        <button 
          onClick={() => navigate('/driver/login')}
          className="mt-8 text-gray-400 text-sm hover:text-gray-600 underline"
        >
          Driver Login
        </button>
      </div>
    );
  }

  // View: Booking Form
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-emerald-600 text-white p-6 shadow-lg rounded-b-[2.5rem] relative z-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Car className="w-8 h-8" />
            <h1 className="text-2xl font-bold">CabConnect</h1>
          </div>
          <p className="text-emerald-100 text-sm">Safe, reliable rides at your fingertips.</p>
        </div>
      </header>

      <main className="flex-1 -mt-8 p-4">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                placeholder="0123456789"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-10 bottom-4 w-0.5 bg-gray-200"></div>
              
              <div className="relative mb-4">
                 <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1 ml-1">
                   <Navigation className="w-4 h-4 text-emerald-600" /> Pickup Location
                 </label>
                 <input
                  type="text"
                  name="pickup"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="Current Location / Address"
                  value={formData.pickup}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative">
                 <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1 ml-1">
                   <MapPin className="w-4 h-4 text-red-500" /> Drop-off
                 </label>
                 <input
                  type="text"
                  name="dropoff"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="Where to?"
                  value={formData.dropoff}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transform transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" /> Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Request Ride
                </>
              )}
            </button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              By requesting a ride, you agree to share your details with the driver so they can contact you.
            </p>
          </form>
        </div>
      </main>

      <footer className="p-4 text-center">
         <button 
          onClick={() => navigate('/driver/login')}
          className="text-gray-300 text-xs hover:text-gray-500"
        >
          Driver Login
        </button>
      </footer>
    </div>
  );
};

export default ClientBooking;

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { Lock, Mail, KeyRound, User, Phone, Car, Palette, Hash } from 'lucide-react';

const VEHICLE_TYPES = [
  { value: 'sedan',    label: 'Sedan' },
  { value: 'hatchback',label: 'Hatchback' },
  { value: 'bakkie',   label: 'Bakkie / Pickup' },
  { value: 'suv',      label: 'SUV / 4×4' },
  { value: 'minivan',  label: 'Minivan / People Carrier' },
  { value: 'other',    label: 'Other' },
];

interface FieldProps { label: string; icon: React.ReactNode; children: React.ReactNode; }
const Field: React.FC<FieldProps> = ({ label, icon, children }) => (
  <label className="block">
    <span className="text-sm text-gray-700 flex items-center gap-2">{icon}{label}</span>
    <div className="mt-1">{children}</div>
  </label>
);

const inputCls = 'w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 text-sm';

const DriverRegister: React.FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [phone, setPhone]         = useState('');
  const [password, setPassword]   = useState('');
  const [make, setMake]               = useState('');
  const [model, setModel]             = useState('');
  const [colour, setColour]           = useState('');
  const [plate, setPlate]             = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const displayName = `${firstName.trim()} ${lastName.trim()}`;
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await setDoc(doc(db, 'users', cred.user.uid), {
        role: 'driver',
        roles: ['driver'],
        approved: false,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        displayName,
        phone: phone.trim(),
        vehicle: {
          make: make.trim(),
          model: model.trim(),
          colour: colour.trim(),
          plate: plate.trim().toUpperCase(),
          vehicleType,
        },
        createdAt: serverTimestamp(),
      });
      navigate('/driver/login', { replace: true });
    } catch (err: any) {
      setError(err?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-5 h-5 text-blue-600" />
          <h1 className="text-xl font-semibold">Driver Registration</h1>
        </div>
        <p className="text-xs text-gray-400 mb-5">Fill in all fields. Your account will be reviewed before activation.</p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Personal Details */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Personal Details</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Field label="First Name" icon={<User className="w-4 h-4" />}>
                  <input className={inputCls} type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Thabo" required />
                </Field>
                <Field label="Last Name" icon={<User className="w-4 h-4" />}>
                  <input className={inputCls} type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Molefe" required />
                </Field>
              </div>
              <Field label="Email" icon={<Mail className="w-4 h-4" />}>
                <input className={inputCls} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="driver@example.com" required autoComplete="email" />
              </Field>
              <Field label="Phone" icon={<Phone className="w-4 h-4" />}>
                <input className={inputCls} type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="0821234567" required />
              </Field>
              <Field label="Password" icon={<KeyRound className="w-4 h-4" />}>
                <input className={inputCls} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Minimum 6 characters" minLength={6} required autoComplete="new-password" />
              </Field>
            </div>
          </div>

          {/* Vehicle Details */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Vehicle Details</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Make" icon={<Car className="w-4 h-4" />}>
                  <input className={inputCls} type="text" value={make} onChange={e => setMake(e.target.value)} placeholder="Toyota" required />
                </Field>
                <Field label="Model" icon={<Car className="w-4 h-4" />}>
                  <input className={inputCls} type="text" value={model} onChange={e => setModel(e.target.value)} placeholder="Corolla" required />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Colour" icon={<Palette className="w-4 h-4" />}>
                  <input className={inputCls} type="text" value={colour} onChange={e => setColour(e.target.value)} placeholder="Silver" required />
                </Field>
                <Field label="Reg Plate" icon={<Hash className="w-4 h-4" />}>
                  <input className={inputCls} type="text" value={plate} onChange={e => setPlate(e.target.value)} placeholder="CA 123-456" required />
                </Field>
              </div>
              <Field label="Vehicle Type" icon={<Car className="w-4 h-4" />}>
                <select className={inputCls} value={vehicleType} onChange={e => setVehicleType(e.target.value)} required>
                  {VEHICLE_TYPES.map(vt => (
                    <option key={vt.value} value={vt.value}>{vt.label}</option>
                  ))}
                </select>
              </Field>
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-sm">{error}</div>
          )}
          <button type="submit" disabled={loading} className="w-full rounded-xl bg-blue-600 text-white py-2.5 font-semibold disabled:opacity-60 hover:bg-blue-700 transition">
            {loading ? 'Registering…' : 'Submit Application'}
          </button>
          <button type="button" onClick={() => navigate('/driver/login')} className="w-full rounded-xl border border-gray-200 py-2 font-medium text-sm text-gray-600 hover:bg-gray-50 transition">
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverRegister;

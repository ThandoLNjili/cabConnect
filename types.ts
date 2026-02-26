import { Timestamp } from 'firebase/firestore';

export interface RideRequest {
  id?: string;
  customerName: string;
  pickup: string;
  dropoff: string;
  pickupCoords?: [number, number];
  dropoffCoords?: [number, number];
  phone: string;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled' | string;
  driverId?: string;
  timestamp: Timestamp | Date;
  acceptedAt?: Timestamp;
  completedAt?: Timestamp;
}

export interface AppState {
  isOnline: boolean;
}

export interface DriverConfig {
  phoneNumber: string; // The WhatsApp number requests are sent to
  pinCode: string;
}

export interface Vehicle {
  make: string;         // e.g. Toyota
  model: string;        // e.g. Corolla
  colour: string;       // e.g. White
  plate: string;        // e.g. CA 123-456
  vehicleType: 'sedan' | 'hatchback' | 'bakkie' | 'suv' | 'minivan' | 'other';
}

export interface DriverProfile {
  id?: string;
  firstName?: string;
  lastName?: string;
  displayName: string;
  phone: string;
  available: boolean;
  fcmToken?: string;
  role: string;
  vehicle?: Vehicle;
}

import { Timestamp } from 'firebase/firestore';

export interface RideRequest {
  id?: string;
  customerName: string;
  pickup: string;
  dropoff: string;
  phone: string;
  status: string;
  driverId?: string;
  timestamp: Timestamp | Date;
}

export interface AppState {
  isOnline: boolean;
}

export interface DriverConfig {
  phoneNumber: string; // The WhatsApp number requests are sent to
  pinCode: string;
}

export interface DriverProfile {
  id?: string;
  displayName: string;
  phone: string;
  available: boolean;
  fcmToken?: string;
  role: string;
}

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCNQaTYYDvt-ETlEZ7b8CiK1QG4vGynJDo",
  authDomain: "cabconnect-b75f6.firebaseapp.com",
  projectId: "cabconnect-b75f6",
  storageBucket: "cabconnect-b75f6.firebasestorage.app",
  messagingSenderId: "837263009325",
  appId: "1:837263009325:web:10336c1678738b6a593aa4",
  measurementId: "G-FPY7FZKFX4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, 'cabconnect');
export const auth = getAuth(app);
export const messaging = getMessaging(app);
/// <reference types="vite/client" />

import { getToken } from 'firebase/messaging';
import { doc, updateDoc } from 'firebase/firestore';
import { messaging, db, auth } from '../firebase';

const VAPID_KEY = 'BNbalcEHKDYuy5PgNYsGCe7oEPxNg1RCe3QVfus4FfuRNGvw0RehK8T_YK7K-k8twZxwtR9VqTM0zpO5WWguXwE';

export async function registerFCMToken() {
  try {
    if (typeof Notification !== 'undefined') {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.warn('Notifications permission not granted');
        return;
      }
    }

    // Manually register the SW so it resolves correctly under the GitHub Pages
    // sub-path (BASE_URL = '/cabConnect/' in production, '/' in dev).
    const swRegistration = await navigator.serviceWorker.register(
      `${import.meta.env.BASE_URL}firebase-messaging-sw.js`,
      { scope: import.meta.env.BASE_URL }
    );
    const token = await getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: swRegistration });
    if (token && auth.currentUser) {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), { fcmToken: token });
    }
  } catch (err) {
    console.error('Failed to register FCM token:', err);
  }
}

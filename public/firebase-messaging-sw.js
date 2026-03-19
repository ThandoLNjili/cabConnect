/* eslint-disable no-undef */
// Firebase Cloud Messaging service worker

importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCNQaTYYDvt-ETlEZ7b8CiK1QG4vGynJDo",
  authDomain: "cabconnect-b75f6.firebaseapp.com",
  projectId: "cabconnect-b75f6",
  storageBucket: "cabconnect-b75f6.firebasestorage.app",
  messagingSenderId: "837263009325",
  appId: "1:837263009325:web:10336c1678738b6a593aa4",
  measurementId: "G-FPY7FZKFX4"
});

const messaging = firebase.messaging();
const appBasePath = self.location.pathname.replace(/firebase-messaging-sw\.js$/, '');

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const title = notification.title || 'New notification';
  const options = {
    body: notification.body || '',
    icon: `${appBasePath}favicon.svg`,
    badge: `${appBasePath}favicon.svg`,
    data: {
      url: `${appBasePath}#/driver`,
    },
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const targetUrl = event.notification.data?.url || `${appBasePath}#/driver`;

      for (const client of clientList) {
        if ('focus' in client) {
          if ('navigate' in client) {
            client.navigate(targetUrl);
          }
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }

      return undefined;
    })
  );
});

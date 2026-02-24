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

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const title = notification.title || 'New notification';
  const options = {
    body: notification.body || '',
    icon: '/pwa-192x192.png'
  };

  self.registration.showNotification(title, options);
});

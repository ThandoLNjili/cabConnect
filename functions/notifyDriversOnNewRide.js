const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Triggered when a new ride request is created
exports.notifyDriversOnNewRide = functions.firestore
  .document('requests/{requestId}')
  .onCreate(async (snap, context) => {
    const ride = snap.data();
    // Find all available drivers
    const driversSnapshot = await admin.firestore().collection('users')
      .where('role', '==', 'driver')
      .where('available', '==', true)
      .get();
    const tokens = driversSnapshot.docs
      .map(doc => doc.data().fcmToken)
      .filter(token => !!token);
    if (tokens.length === 0) return null;
    // Compose notification
    const title = 'New Ride Request';
    const body = `${ride.customerName} needs a ride from ${ride.pickup} to ${ride.dropoff}`;
    // Use a data-only message (no top-level "notification" key).
    // Notification-type messages can be auto-consumed by the FCM SDK on web,
    // bypassing onBackgroundMessage and silently failing to show in the
    // background. Data-only messages always reach onBackgroundMessage, where
    // the service worker calls showNotification() explicitly.
    const message = {
      data: { title, body },
      tokens: tokens,
    };
    // Send notification
    return admin.messaging().sendMulticast(message);
  });

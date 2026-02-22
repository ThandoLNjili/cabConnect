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
    const message = {
      notification: {
        title: 'New Ride Request',
        body: `${ride.customerName} needs a ride from ${ride.pickup} to ${ride.dropoff}`
      },
      tokens: tokens
    };
    // Send notification
    return admin.messaging().sendMulticast(message);
  });

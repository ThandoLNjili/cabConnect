const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
db.settings({ databaseId: 'cabconnect' });

// Triggered when a new ride request is created in Firestore.
// Sends a push notification to all online (available) drivers who have an FCM token.
exports.notifyDriversOnNewRide = onDocumentCreated(
  { document: 'requests/{requestId}', database: 'cabconnect' },
  async (event) => {
    const snap = event.data;
    const ride = snap.data();

    // Find all available drivers with a registered FCM token
    const driversSnapshot = await db
      .collection('users')
      .where('role', '==', 'driver')
      .where('available', '==', true)
      .get();

    const tokens = driversSnapshot.docs
      .map(d => d.data().fcmToken)
      .filter(t => typeof t === 'string' && t.length > 0);

    if (tokens.length === 0) {
      console.log('No available drivers with FCM tokens.');
      return null;
    }

    const message = {
      notification: {
        title: 'New Ride Request',
        body: `${ride.customerName} needs a ride from ${ride.pickup} to ${ride.dropoff}`,
      },
      tokens,
    };

    // sendEachForMulticast replaces the deprecated sendMulticast (Admin SDK v12+)
    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(`Sent ${response.successCount}/${tokens.length} notifications.`);

    // Remove any tokens that are no longer valid
    const staleTokenUpdates = [];
    response.responses.forEach((res, idx) => {
      if (!res.success && res.error?.code === 'messaging/registration-token-not-registered') {
        const driverDoc = driversSnapshot.docs[idx];
        staleTokenUpdates.push(
          db.doc(`users/${driverDoc.id}`).update({ fcmToken: admin.firestore.FieldValue.delete() })
        );
      }
    });
    if (staleTokenUpdates.length > 0) {
      await Promise.all(staleTokenUpdates);
      console.log(`Cleaned up ${staleTokenUpdates.length} stale token(s).`);
    }

    return null;
  });

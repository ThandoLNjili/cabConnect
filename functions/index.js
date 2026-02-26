const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { onSchedule } = require('firebase-functions/v2/scheduler');
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

// ── Scheduled: auto-timeout drivers who have been online too long without activity ──
// Reads the timeout threshold from settings/driverTimeout (default 2 hours).
// Any driver with available=true whose lastAvailableUpdate is older than the threshold
// is set offline automatically.
exports.timeoutInactiveDrivers = onSchedule(
  { schedule: 'every 30 minutes', timeZone: 'Africa/Johannesburg' },
  async () => {
    const settingsDoc = await db.collection('settings').doc('driverTimeout').get();
    const timeoutHours = settingsDoc.exists ? (settingsDoc.data().hours ?? 2) : 2;
    const cutoffMs = Date.now() - timeoutHours * 60 * 60 * 1000;

    const onlineSnap = await db.collection('users')
      .where('available', '==', true)
      .get();

    const updates = [];
    for (const d of onlineSnap.docs) {
      const lastUpdate = d.data().lastAvailableUpdate?.toDate?.() ?? new Date(0);
      if (lastUpdate.getTime() < cutoffMs) {
        updates.push(
          d.ref.update({
            available: false,
            timedOutAt: admin.firestore.FieldValue.serverTimestamp(),
          })
        );
      }
    }

    if (updates.length > 0) {
      await Promise.all(updates);
      console.log(`Timed out ${updates.length} inactive driver(s) (threshold: ${timeoutHours}h).`);
    } else {
      console.log('No inactive drivers to time out.');
    }
    return null;
  }
);

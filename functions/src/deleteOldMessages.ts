import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const deleteOldMessages = functions.pubsub
  .schedule("every 72 hours")
  .timeZone("Asia/Jakarta") // opsional: set zona waktu
  .onRun(async () => {
    const db = admin.firestore();
    const cutoff = admin.firestore.Timestamp.fromDate(
      new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    );

    const messagesRef = db.collection("messages");
    const oldMessages = await messagesRef.where("createdAt", "<", cutoff).get();

    const batch = db.batch();
    oldMessages.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();

    console.log(`Deleted ${oldMessages.size} old messages.`);
    return null;
  });

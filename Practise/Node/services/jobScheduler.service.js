const { CronJob } = require("cron");
const { getDb } = require("../db");

// A Set to track IDs that are already scheduled to avoid duplicate timers.
const scheduledTaskIds = new Set();

/**
 * Schedule an individual notification job.
 * @param {Object} element - The notification record.
 */
const scheduleNotification = (element) => {
  // If the ID is already scheduled, return early.
  if (scheduledTaskIds.has(element.id)) {
    return;
  }

  const database = getDb();
  const scheduledTime = new Date(element.utcDate);

  // Check if date is in the past to avoid CronError crash
  if (scheduledTime <= new Date()) {
    console.warn(`Job for ID: ${element.id} is in the past (${element.utcDate}). Skipping.`);
    return;
  }
  console.log("Registered for ID: ", element.id);
  try {
    const cron = new CronJob(scheduledTime, function () {
      console.log(`Notification for ID: ${element.id} sent at ${new Date().toISOString()}`);
      database
        .collection("schedule")
        .updateOne({ id: element.id }, { $set: { sent: true } });

      // After task is executed, remove from scheduled set
      scheduledTaskIds.delete(element.id);
    });

    cron.start();

    // Mark as scheduled in the local Set
    scheduledTaskIds.add(element.id);
  } catch (err) {
    console.error(`Failed to start CronJob for ID: ${element.id}:`, err.message);
  }
};

module.exports = {
  scheduleNotification,
};

const { CronJob } = require("cron");
const { getDb } = require("../db");

/**
 * Schedule an individual notification job.
 * @param {Object} element - The notification record.
 */
const scheduleNotification = (element) => {
  const database = getDb();
  const scheduledTime = new Date(element.utcDate);

  // Check if date is in the past to avoid CronError crash
  if (scheduledTime <= new Date()) {
    console.warn(`Job for ID: ${element.id} is in the past (${element.utcDate}). Skipping.`);
    return;
  }

  try {
    const cron = new CronJob(scheduledTime, function () {
      console.log(`Notification for ID: ${element.id} sent at ${new Date().toISOString()}`);
      database
        .collection("schedule")
        .updateOne({ id: element.id }, { $set: { sent: true } });
    });
    cron.start();
  } catch (err) {
    console.error(`Failed to start CronJob for ID: ${element.id}:`, err.message);
  }
};

module.exports = {
  scheduleNotification,
};

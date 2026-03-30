const { DateTime } = require("luxon");
const { getDb } = require("../db");
const { scheduleNotification } = require("../services/jobScheduler.service");

/**
 * Handle POST /api/schedule
 * Schedules a new notification.
 */
const scheduleNotificationHandler = async (req, res) => {
  const { Date, zone, id, sent = false } = req.body;

  // Convert incoming date format to ISO UTC
  const utcDate = DateTime.fromFormat(Date, "yyyy-MM-dd HH:mm", {
    zone: zone,
  })
    .toUTC()
    .toISO();

  const database = getDb();
  await database
    .collection("schedule")
    .updateOne(
      { id },
      { $set: { Date, zone, id, utcDate, sent } },
      { upsert: true }
    );

  // Schedule the job immediately if not sent
  if (!sent) {
    scheduleNotification({ id, utcDate });
  }

  return res.json({
    status: "success",
    Date,
    zone,
    id,
    utcDate,
    sent,
  });
};

module.exports = {
  scheduleNotificationHandler,
};

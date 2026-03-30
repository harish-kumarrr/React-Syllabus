const { DateTime } = require("luxon");
const { getDb } = require("../db");
const { scheduleNotification } = require("../services/jobScheduler.service");

/**
 * Handle POST /api/schedule
 * Schedules a new notification.
 */
const scheduleNotificationHandler = async (req, res) => {
  const { Date, zone, id, sent = false } = req.body;
  const utcDate = DateTime.fromFormat(Date, "yyyy-MM-dd HH:mm", { zone: zone, }).toUTC().toISO();
  const database = getDb(); await database.collection("schedule").updateOne({ id }, { $set: { Date, zone, id, utcDate, sent } }, { upsert: true });
  return res.json({ status: "success", Date, zone, id, utcDate, sent, });
};

module.exports = {
  scheduleNotificationHandler,
};

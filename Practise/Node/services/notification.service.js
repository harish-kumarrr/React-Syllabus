const { getDb } = require("../db");
const { scheduleNotification } = require("./jobScheduler.service");

/**
 * Scan the database for unsent notifications and schedule them using the scheduler service.
 */
const cronJobSchedule = () => {
  const database = getDb();
  database
    .collection("schedule")
    .find({ sent: false })
    .toArray()
    .then((response) => {
      response.forEach((element) => {
        scheduleNotification(element);
      });
    })
    .catch((err) => {
      console.error("Error in cronJobSchedule finding documents:", err);
    });
};

module.exports = {
  cronJobSchedule,
};

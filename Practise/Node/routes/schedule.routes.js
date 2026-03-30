const { Router } = require("express");
const { scheduleNotificationHandler } = require("../controllers/schedule.controller");

const router = Router();

// Route: POST /api/schedule
router.post("/schedule", scheduleNotificationHandler);

module.exports = router;

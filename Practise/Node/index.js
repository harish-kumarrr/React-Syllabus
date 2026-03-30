require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { connectMongoLoop } = require("./db");
const { CronJob } = require("cron");
const { cronJobSchedule } = require("./services/notification.service");
const scheduleRoutes = require("./routes/schedule.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", scheduleRoutes);

/**
 * Server initialization sequence
 */
const start = async () => {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
  await connectMongoLoop();
  const backgroundSync = new CronJob("*/1 * * * *", () => {
    console.log("🔄 Running periodic background sync...");
    cronJobSchedule();
  });
  backgroundSync.start();
};

start().catch(err => {
  console.error("Failed to start the application:", err);
});

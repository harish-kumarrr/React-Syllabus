const express = require("express");
const cors = require("cors");
const { connectMongoLoop } = require("./db");
require('dotenv').config()
const { cronJobSchedule } = require("./services/notification.service");
const scheduleRoutes = require("./routes/schedule.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Prefixing routes with /api for consistency
app.use("/api", scheduleRoutes);

/**
 * Server initialization sequence
 */
const start = async () => {
  // Start Express Server
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });

  // Connect to MongoDB with retry logic
  await connectMongoLoop();

  // Run initial cron job scan to schedule pending notifications
  cronJobSchedule();
};

start().catch(err => {
  console.error("Failed to start the application:", err);
});

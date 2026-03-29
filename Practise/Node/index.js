const express = require("express");
const cors = require("cors");
const { DateTime } = require("luxon");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/schedule", (req, res) => {
  const { timezone, dateTime } = req.query;
  const testZones = [
    "Asia/Kolkata",
    "Europe/London",
    "America/New_York",
    "America/Los_Angeles",
  ];

  if (!timezone || !dateTime) {
    return res.status(400).json({
      error: "Query params required: timezone, dateTime (ISO)",
    });
  }

  const base = DateTime.fromISO(String(dateTime), { zone: String(timezone) });
  if (!base.isValid) {
    return res.status(400).json({
      error: "Invalid dateTime or timezone",
      reason: base.invalidReason,
    });
  }

  const time = testZones.map((tz) => ({
    [tz]: base.setZone(tz).toFormat("dd MM yyyy HH mm ss"),
  }));

  res.json({ time });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(
    `Try: http://localhost:${PORT}/api/schedule?timezone=Asia/Kolkata&dateTime=2026-03-28T17:30:00`
  );
});

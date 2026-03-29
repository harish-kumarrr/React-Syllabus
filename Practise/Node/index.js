const express = require("express");
const cors = require("cors");
const { DateTime } = require("luxon");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/schedule", (req, res) => {
 
  const testZones = [
    "Asia/Kolkata",
    "Europe/London",
    "America/New_York",
    "America/Los_Angeles",
  ];
  
  const time = testZones.map((tz) => ({
    [tz]: DateTime.now().setZone(tz).toFormat("dd/MM/yyyy HH:mm:ss"),
  }));

  res.json({ time });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(
    `Try: http://localhost:${PORT}/api/schedule?timezone=Asia/Kolkata&dateTime=2026-03-28T17:30:00`
  );
});

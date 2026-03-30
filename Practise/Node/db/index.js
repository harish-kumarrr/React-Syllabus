 

const { MongoClient, ServerApiVersion } = require("mongodb");
 
const uri = process.env.MONGODB_URI;
 

const client = new MongoClient(uri, {
  family: 4,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db = null;

async function connectMongo() {
  if (db) return db;
  await client.connect();
  db = client.db("portfolio");
  console.log("✅ Connected to MongoDB (portfolio)");
  return db;
}

function getDb() {
  if (!db) {
    throw new Error("MongoDB not connected; call connectMongo() first");
  }
  return db;
}
 


async function connectMongoLoop() {
  try {
    await connectMongo();
    return;
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    console.error(
      "Tips: use IPv4 WiFi/Ethernet, try DNS 8.8.8.8, or in Atlas copy the standard (non-SRV) URI and set MONGODB_URI."
    );
    // Exponential backoff or simply retry after a delay if needed
    setTimeout(connectMongoLoop, 5000);
  }
}

module.exports = { client, connectMongo, getDb, connectMongoLoop };

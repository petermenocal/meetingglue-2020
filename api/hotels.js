const url = require("url");
const MongoClient = require("mongodb").MongoClient;

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = await db.collection("hotels");

  const hotels = await collection.find({}).toArray();
  res.status(200).json({ hotels });
};

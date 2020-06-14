const url = require("url");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = await db.collection("rfps");

  if (!req.query || req.query.id) {
    res.status(400);
  }

  var requestedRFPId = req.query.id;

  const rfps = await collection
    .find({ _id: ObjectID(requestedRFPId) })
    .toArray();

  res.status(200).json({ rfps });
};

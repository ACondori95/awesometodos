require("dotenv").config();
const {ServerApiVersion, MongoClient} = require("mongodb");

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
const connectToMongoDB = async () => {
  if (!client) {
    try {
      client = await MongoClient.connect(URI, options);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  }
  return client;
};

const getConnectedClient = () => client;

module.exports = {connectToMongoDB, getConnectedClient};

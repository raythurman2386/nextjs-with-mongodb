// @ts-nocheck
import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.MONGODB_DB as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (!MONGODB_DB) {
  throw new Error("Please define the MONGODB_DB environment variable");
}

interface CachedConnection {
  client: MongoClient;
  db: Db;
}

let cachedConnection: CachedConnection | null = null;

export async function connectToDatabase(): Promise<CachedConnection> {
  if (cachedConnection) {
    return cachedConnection;
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(MONGODB_DB);

  cachedConnection = {
    client,
    db,
  };

  return cachedConnection;
}

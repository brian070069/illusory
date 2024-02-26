import mongoose, { Mongoose } from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

interface MongooseConnection {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    connection: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.connection) return cached.connection;

  if (!MONGO_URL) throw new Error("YOUR MONGO_URL IS UNDEFINED");

  cached.promise = mongoose.connect(MONGO_URL);
  cached.connection = await cached.promise;

  return cached.connection;
};

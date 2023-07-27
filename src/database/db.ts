import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

// Object to store the current state of the connection to MongoDB
const mongoConnection = {
  isConnected: 0,
};

mongoose.set("strictQuery", false);

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("Connected to MongoDB:", process.env.MONGODB_URL);
  } catch (error) {
    throw new Error("Connection failed");
  }
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "production") return;
  // if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;

  console.log("Disconnected from MongoDB");
};

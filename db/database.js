import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB.");
      return;
    }
    
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  }
}

const databaseInstance = new Database();
export default databaseInstance;

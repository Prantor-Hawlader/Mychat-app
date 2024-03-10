import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGDB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Connection failed", error.message);
  }
};

export default connectToMongoDB;

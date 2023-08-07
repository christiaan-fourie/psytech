import mongoose from "mongoose";

const connectMongoDB = async () => {

    // Define URI as string
    const uri = String(process.env.MONGODB_URI);

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
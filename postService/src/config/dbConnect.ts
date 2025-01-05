import mongoose from "mongoose";

const connectDB = async (MONGODB_URI: string): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Users MongoDB connected')
  } catch (err) {
    console.error('Database connection failed', err)
    throw err
  }
}

export default connectDB
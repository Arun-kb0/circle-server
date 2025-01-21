import { Document } from "mongoose";

interface IChatRoom extends Document {
  _id: string,
  roomId: string
  userId: string
  targetId: string
  createdAt: Date
  updatedAt: Date
}

export default IChatRoom
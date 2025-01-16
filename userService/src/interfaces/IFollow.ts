import { Date, Document } from "mongoose";

interface IFollow extends Document {
  _id: string,
  userId: string
  targetUserId: string,
  relationType: "follower" | "followee"
  createdAt: Date
  updatedAt: Date
}

export default IFollow
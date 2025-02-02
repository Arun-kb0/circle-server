import mongoose, { Schema, Document, Date, Types } from "mongoose";

export interface IFollowDb extends Document {
  _id: Types.ObjectId,
  userId: Types.ObjectId
  targetUserId: Types.ObjectId,
  relationType: "follower" | "followee"
  createdAt: Date
  updatedAt: Date
}

const FollowSchema = new Schema<IFollowDb>(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    targetUserId: { type: Schema.Types.ObjectId, required: true },
    relationType: { type: String, required: true },
  },
  { timestamps: true }
)


export const Follow = mongoose.model<IFollowDb>('follow', FollowSchema) 
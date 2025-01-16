import mongoose, { Schema } from "mongoose";
import IFollow from '../interfaces/IFollow'

const FollowSchema = new Schema<IFollow>(
  {
    userId: { type: String, required: true },
    targetUserId: { type: String, required: true },
    relationType: { type: String, required: true },
  },
  { timestamps: true }
)


export const Follow = mongoose.model<IFollow>('follow', FollowSchema) 
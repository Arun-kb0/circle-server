import mongoose, { Schema, Document, Date, Types } from "mongoose";

export interface IBlockUserDb extends Document {
  _id: Types.ObjectId
  blockedUserId: Types.ObjectId
  blockerUserId: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const BlockUserSchema = new Schema<IBlockUserDb>(
  {
    blockedUserId: { type: Schema.Types.ObjectId, required: true },
    blockerUserId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
)


export const BlockUser = mongoose.model<IBlockUserDb>('blockedUsers', BlockUserSchema) 
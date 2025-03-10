import mongoose, { Schema, Document, Date, Types } from 'mongoose'

export interface ISavedDb extends Document {
  _id: Types.ObjectId
  userId: Types.ObjectId
  postId: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const savedSchema = new Schema<ISavedDb>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, index: true },
    postId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
)

export const Saved = mongoose.model<ISavedDb>('saved', savedSchema) 
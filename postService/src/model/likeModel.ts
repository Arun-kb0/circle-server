import mongoose, { Schema, Document, Date, Types } from "mongoose";

export interface ILikeDb extends Document {
  _id: Types.ObjectId,
  authorId: Types.ObjectId
  contentId: Types.ObjectId
  contentType: 'post' | 'story' | 'comment'
  updatedAt: Date
  createdAt: Date
}

const LikeSchema = new Schema<ILikeDb>(
  {
    authorId: { type: Schema.Types.ObjectId, required: true },
    contentId: { type: Schema.Types.ObjectId, required: true },
    contentType: { type: String, required: true },
  },
  { timestamps: true }
)

export const Like = mongoose.model<ILikeDb>('likes', LikeSchema)
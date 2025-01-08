import mongoose, { Schema } from 'mongoose'
import IPost from '../interfaces/IPost'

const PostSchema = new Schema<IPost>(
  {
    desc: { type: String },
    tags: { type: [String], default: [] },
    mediaType: { type: String },
    media: { type: [String], default: [] },
    authorId: { type: String },
    status: { type: String , default: "active" },
    likesCount: { type: Number, default: 0 },
    reportsCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Post = mongoose.model<IPost>('posts', PostSchema) 
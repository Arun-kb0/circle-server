import mongoose, { Schema, Document, Model, Date, mongo } from 'mongoose'


export interface IPost extends Document {
  _id: string,
  desc?: string
  tags?: string[]
  mediaType: 'image' | 'video' | 'text',
  media?: string[],
  authorId: string,
  status: 'active' | 'deleted' | 'blocked'
  likesCount: number
  reportsCount: number
  commentCount: number
  shareCount: number
  updateAt: Date
  createAt: Date
}

const PostSchema = new Schema<IPost>(
  {
    desc: { type: String },
    tags: { type: [String], default: [] },
    mediaType: { type: String },
    media: { type: [String], default: [] },
    authorId: { type: String },
    status: { type: String },
    likesCount: { type: Number, default: 0 },
    reportsCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Post = mongoose.model<IPost>('posts', PostSchema) 
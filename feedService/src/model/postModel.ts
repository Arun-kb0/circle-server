import mongoose, { Schema, Types ,Document , Date} from 'mongoose'

export interface IPostDb extends Document {
  _id: Types.ObjectId,
  desc?: string
  tags: string[]
  mediaType: 'image' | 'video' | 'text',
  media: string[],
  authorId: Types.ObjectId,
  status: 'active' | 'deleted' | 'blocked'
  likesCount: number
  reportsCount: number
  commentCount: number
  shareCount: number
  updatedAt: Date
  createdAt: Date
}

const PostSchema = new Schema<IPostDb>(
  {
    desc: { type: String },
    tags: { type: [String], default: [] },
    mediaType: { type: String },
    media: { type: [String], default: [] },
    authorId: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, default: "active" },
    likesCount: { type: Number, default: 0 },
    reportsCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Post = mongoose.model<IPostDb>('posts', PostSchema) 
import mongoose, { Schema, Document, Date, Types } from 'mongoose'

export interface ICommentDb extends Document {
  _id: Types.ObjectId,
  media: string
  mediaType: 'gif' | 'text'
  status: 'active' | 'deleted' | 'blocked'
  authorId: Types.ObjectId,
  parentId?: Types.ObjectId,
  likesCount: number
  replayCount: number
  contentId: Types.ObjectId
  contentType: 'post' | 'story' | 'comment'
  updatedAt: Date
  createdAt: Date
}

const CommentSchema = new Schema<ICommentDb>(
  {
    media: { type: String },
    mediaType: { type: String },
    status: { type: String },
    authorId: { type: Schema.Types.ObjectId, required: true },
    parentId: { type: Schema.Types.ObjectId, default: null },
    likesCount: { type: Number },
    replayCount: { type: Number },
    contentId: { type: Schema.Types.ObjectId, required: true },
    contentType: { type: String, required: true },
  },
  { timestamps: true }
)

export const Comment = mongoose.model<ICommentDb>('comments', CommentSchema) 
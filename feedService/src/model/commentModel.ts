import mongoose, { Schema } from 'mongoose'
import IComment from '../interfaces/IComment'

const CommentSchema = new Schema<IComment>(
  {
    media: { type: String },
    mediaType: { type: String },
    status: { type: String },
    authorId: { type: String },
    parentId: { type: String },
    likesCount: { type: Number },
    replayCount: { type: Number },
    contentId: { type: String },
    contentType: { type: String },
  },
  { timestamps: true }
)

export const Comment = mongoose.model<IComment>('comments', CommentSchema) 
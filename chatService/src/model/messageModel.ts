import mongoose, { Schema } from 'mongoose'
import IMessage from '../interfaces/IMessage'

const MessageSchema = new Schema<IMessage>(
  {
    id: { type: String, required: true },
    roomId: { type: String, required: true },
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    authorImage: { type: String, default: null },
    receiverId: { type: String, required: true },
    mediaType: { type: String },
    message: { type: String, required: true },
    status: { type: String, default: 'sent'},
  },
  { timestamps: true }
)

export const Message = mongoose.model('messages', MessageSchema)
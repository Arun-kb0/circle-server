import mongoose, { Schema, Document, Types, Date } from 'mongoose'

export interface IMessageDb extends Document {
  _id: Types.ObjectId,
  id: string
  roomId: string
  authorId: Types.ObjectId
  receiverId: Types.ObjectId
  mediaType: 'text' | 'audio' | 'photo'
  message: string
  createdAt: Date
  updatedAt: Date
  status: 'sent' | 'received' | 'seen'
}

const MessageSchema = new Schema<IMessageDb>(
  {
    id: { type: String, required: true, index: true },
    roomId: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    receiverId: { type: Schema.Types.ObjectId, required: true },
    mediaType: { type: String },
    message: { type: String, required: true },
    status: { type: String, default: 'sent' },
  },
  { timestamps: true }
)

export const Message = mongoose.model('messages', MessageSchema)
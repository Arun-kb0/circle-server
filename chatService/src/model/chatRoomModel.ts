import mongoose, { Schema, Types, Document, Date } from 'mongoose'

export interface IChatRoomDb extends Document {
  _id: Types.ObjectId,
  roomId: string
  userId: Types.ObjectId
  targetId: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const ChatSchema = new Schema<IChatRoomDb>(
  {
    roomId: { type: String, required: true, unique: true, index: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    targetId: { type: Schema.Types.ObjectId }
  },
  { timestamps: true }
)

export const ChatRoom = mongoose.model('chat', ChatSchema)
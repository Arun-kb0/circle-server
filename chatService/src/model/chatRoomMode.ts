import mongoose, { Schema } from 'mongoose'
import IChatRoom from '../interfaces/IChatRoom'

const ChatSchema = new Schema<IChatRoom>(
  {
    roomId: { type: String, required: true },
    userId: { type: String, required: true },
    targetId : { type: String }
  },
  { timestamps: true }
)

export const Chat = mongoose.model('chat', ChatSchema)
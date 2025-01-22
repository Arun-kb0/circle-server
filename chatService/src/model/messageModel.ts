import mongoose, { Schema } from 'mongoose'
import IMessage from '../interfaces/IMessage'

const MessageSchema = new Schema<IMessage>(
  {
    
  },
  { timestamps: true }
)

export const Message = mongoose.model('messages', MessageSchema)
import mongoose, { Schema, Document, Date, Types } from "mongoose";

export interface INotificationDb extends Document {
  _id : Types.ObjectId,
  authorId: Types.ObjectId
  receiverId: Types.ObjectId
  type: String
  message: string
  read: boolean
  createdAt: Date
  updatedAt: Date
}

const notificationSchema = new Schema<INotificationDb>(
  {
    authorId: { type: Schema.Types.ObjectId, required: true },
    receiverId: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { 
    timestamps: true,
    capped: { size: 1024 * 1024, max: 30 } // 1MB size limit and max 30 documents
  }
)

export const Notification = mongoose.model<INotificationDb>('notifications', notificationSchema)
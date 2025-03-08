import mongoose, { Schema, Types, Document, Date } from 'mongoose'
import { userInfo } from 'os'

export interface IOrderDb extends Document {
  _id: Types.ObjectId
  orderId: Types.ObjectId
  merchantTransactionId: string
  userId: Types.ObjectId
  amount: number
  orderType: 'user_subscription' | 'advertisement'
  userSubscriptionDuration?: 'monthly' | 'yearly' | 'lifetime'
  state: "pending" | "completed" | "failed"
  createdAt: Date
  updatedAt: Date
}

const orderSchema = new Schema<IOrderDb>(
  {
    orderId: { type: Schema.Types.ObjectId, required: true, default: () => new mongoose.Types.ObjectId() },
    userId: { type: Schema.Types.ObjectId, required: true },
    merchantTransactionId: { type: String, index: true },
    amount: { type: Number, required: true },
    orderType: { type: String, enum: ['user_subscription', 'advertisement'], required: true },
    userSubscriptionDuration: { type: String, enum: ['monthly', 'yearly', 'lifetime'], required: true },
    state: { type: String, enum: ["pending", "completed", "failed"], required: true },
  },
  { timestamps: true }
)


export const Order = mongoose.model('order', orderSchema) 
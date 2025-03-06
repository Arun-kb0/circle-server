import mongoose, { Schema, Types, Document, Date } from 'mongoose'

export interface ISubscriptionDb extends Document {
  _id: Types.ObjectId
  subscriberUserId: Types.ObjectId
  subscriberToUserId: Types.ObjectId
  plan: 'monthly' | 'yearly' | 'lifetime'
  status: 'inactive' | 'active' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

const SubscriptionSchema: Schema = new Schema({
  subscriberUserId: { type: Types.ObjectId, required: true, ref: 'User' },
  subscriberToUserId: { type: Types.ObjectId, required: true, ref: 'User' },
  plan: { type: String, enum: ['monthly', 'yearly', 'lifetime'], required: true },
  status: { type: String, enum: ['inactive', 'active', 'cancelled'], required: true },
})

export const Subscription = mongoose.model<ISubscriptionDb>('Subscription', SubscriptionSchema);


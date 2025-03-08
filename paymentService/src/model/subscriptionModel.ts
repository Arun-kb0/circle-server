import mongoose, { Schema, Types, Document, Date } from 'mongoose'

export interface ISubscriptionDb extends Document {
  _id: Types.ObjectId
  merchantTransactionId: string
  subscriberUserId: Types.ObjectId
  subscriberToUserId: Types.ObjectId
  plan: 'monthly' | 'yearly' | 'lifetime'
  status: 'inactive' | 'active' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

const SubscriptionSchema: Schema = new Schema({
  merchantTransactionId: { type: String, required: true, index: true },
  subscriberUserId: { type: Types.ObjectId, required: true, ref: 'User', index: true },
  subscriberToUserId: { type: Types.ObjectId, required: true, ref: 'User', index: true },
  plan: { type: String, enum: ['monthly', 'yearly', 'lifetime'], required: true },
  status: { type: String, enum: ['inactive', 'active', 'cancelled'], required: true },
},
  { timestamps: true }
);


export const Subscription = mongoose.model<ISubscriptionDb>('Subscription', SubscriptionSchema);


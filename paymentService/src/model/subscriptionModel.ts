import mongoose, { Schema, Types, Document, Date as DateDb } from 'mongoose'

export interface ISubscriptionDb extends Document {
  _id: Types.ObjectId
  merchantTransactionId: string
  subscriberUserId: Types.ObjectId
  subscriberToUserId: Types.ObjectId
  plan: 'monthly' | 'yearly' | 'lifetime'
  status: 'inactive' | 'active' | 'cancelled'
  expiresAt: DateDb | null,
  createdAt: DateDb
  updatedAt: DateDb
}

const SubscriptionSchema: Schema = new Schema({
  merchantTransactionId: { type: String, required: true, index: true },
  subscriberUserId: { type: Types.ObjectId, required: true, ref: 'User', index: true },
  subscriberToUserId: { type: Types.ObjectId, required: true, ref: 'User', index: true },
  plan: { type: String, enum: ['monthly', 'yearly', 'lifetime'], required: true },
  status: { type: String, enum: ['inactive', 'active', 'cancelled'], required: true },
  expiresAt: { type: Date, default: null, index: { expireAfterSeconds: 0 } }
},
  { timestamps: true }
);

const PLAN_TTL = {
  monthly: 30 * 24 * 60 * 60, // 30 days in seconds
  yearly: 365 * 24 * 60 * 60, // 365 days in seconds
  lifetime: null, // Lifetime plans never expire
}

SubscriptionSchema.pre<ISubscriptionDb>('save', function (next) {
  const subscription = this 
  const ttl = PLAN_TTL[subscription.plan]
  console.log(subscription.plan)
  console.log(ttl)
  if (ttl !== null) {
    subscription.expiresAt = new Date(Date.now() + ttl * 1000) as unknown as DateDb
  } else {
    subscription.expiresAt = null
  }
  next()
})

export const Subscription = mongoose.model<ISubscriptionDb>('Subscription', SubscriptionSchema);


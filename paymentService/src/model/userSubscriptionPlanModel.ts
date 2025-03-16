import mongoose, { Schema, Date, Types, Document } from "mongoose"


export interface IUserSubscriptionPlanDb extends Document {
  _id: Types.ObjectId
  userId: Types.ObjectId
  monthly: number
  yearly: number
  lifetime: number
  createdAt: Date
  updatedAt: Date
}

const userSubscriptionPlanSchema = new Schema<IUserSubscriptionPlanDb>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, unique: true, index: true },
    monthly: { type: Number, required: true },
    yearly: { type: Number, required: true },
    lifetime: { type: Number, required: true },
  },
  { timestamps: true }
)

export const UserSubscriptionPlan = mongoose.model<IUserSubscriptionPlanDb>('User-subscription-plans', userSubscriptionPlanSchema)
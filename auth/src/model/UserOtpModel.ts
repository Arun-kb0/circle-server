import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUserOtp extends Document {
  _id: string
  email: string
  name: string
  password: string,
  otp: string
  createdAt: Date
  updatedAt: Date
  expireAt: Date
}


const UserOtpSchema = new Schema<IUserOtp>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  otp: { type: String, required: true },
  expireAt: { type: Date, required: true, expires: 10 * 60 },
}, { timestamps: true })

export const UserOtp = mongoose.model<IUserOtp>("user_otps", UserOtpSchema)
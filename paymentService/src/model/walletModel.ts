import mongoose, { Schema, Date, Types, Document } from "mongoose"


export interface IWalletDb extends Document {
  _id: Types.ObjectId
  userId: Types.ObjectId,
  balance: number
  currency: string
  createdAt: Date
  updatedAt: Date
}

const walletSchema = new Schema<IWalletDb>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, unique: true, index: true },
    balance: { type: Number, required: true, default: 0 },
    currency: { type: String, default: 'INR' },
  },
  { timestamps: true }
)

export const Wallet = mongoose.model<IWalletDb>('Wallet', walletSchema)
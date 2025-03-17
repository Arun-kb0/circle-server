import mongoose, { Schema, Types, Document, Date } from 'mongoose'

export interface IPaymentDb extends Document {
  _id: Types.ObjectId
  transactionId: string
  orderId: Types.ObjectId
  method: string
  amount: number
  currency: string
  status: 'initiated' | 'successful' | 'failed'
  transactionDate: Date
  createdAt: Date
  updatedAt: Date
  merchantTransactionId: string
  arn: string
  authRefId: string
  userId: Types.ObjectId
}

const PaymentSchema: Schema = new Schema(
  {
    transactionId: { type: String, required: true },
    orderId: { type: Schema.Types.ObjectId, required: true },
    method: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true, default: 'INR' },
    status: { type: String, enum: ['initiated', 'successful', 'failed'], required: true },
    transactionDate: { type: Date, required: true },
    merchantTransactionId: { type: String, index: true },
    arn: { type: String },
    authRefId: { type: String },
    userId: { type: Schema.Types.ObjectId, required: true, index: true }
  },
  { timestamps: true }
);

export const Payment = mongoose.model<IPaymentDb>('Payment', PaymentSchema);
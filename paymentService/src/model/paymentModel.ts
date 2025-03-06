import mongoose, { Schema, Types, Document, Date } from 'mongoose'

export interface IPaymentDb extends Document {
  _id: Types.ObjectId
  paymentId: String
  orderId: Types.ObjectId
  method: string
  amount: number
  currency: string
  status: 'initiated' | 'successful' | 'failed'
  transactionDate: Date
  createdAt: Date
  updatedAt: Date
}

const PaymentSchema: Schema = new Schema(
  {
    paymentId: { type: String, required: true },
    orderId: { type: Schema.Types.ObjectId, required: true },
    method: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true, default: 'INR' },
    status: { type: String, enum: ['initiated', 'successful', 'failed'], required: true },
    transactionDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Payment = mongoose.model<IPaymentDb>('Payment', PaymentSchema);



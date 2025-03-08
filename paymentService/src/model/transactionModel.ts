import mongoose, { Schema, Date, Types, Document } from "mongoose"

export interface ITransactionDb extends Document {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  senderId: Types.ObjectId
  receiverId: Types.ObjectId
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema: Schema = new Schema({
  userId: { type: Types.ObjectId, required: true, index: true },
  senderId: { type: Types.ObjectId, required: true },
  receiverId: { type: Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  type: { type: String, enum: ['credit', 'debit'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], required: true },
},
  { timestamps: true }
)

export const Transaction = mongoose.model<ITransactionDb>('Transaction', TransactionSchema);
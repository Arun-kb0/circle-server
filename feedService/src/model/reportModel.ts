import mongoose, { Schema, Document, Date, Types } from 'mongoose'

export interface IReportDb extends Document {
  _id: Types.ObjectId
  userId: Types.ObjectId
  contentId: Types.ObjectId
  contentType: { type: String, enum: ['post', 'story', 'user', 'comment'], required: true }
  description?: string
  createdAt: Date
  updatedAt: Date
}

const reportSchema = new Schema<IReportDb>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, index: true },
    contentId: { type: Schema.Types.ObjectId, required: true },
    contentType: { type: String, enum: ['post', 'story', 'user', 'comment'], required: true },
    description: { type: String }
  },
  { timestamps: true }
)

reportSchema.index({ contentId: 1, contentType: 1 })

export const Report = mongoose.model<IReportDb>('reports', reportSchema) 
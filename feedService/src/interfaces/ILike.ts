import { Document, Date } from 'mongoose'

interface ILike extends Document {
  _id: string
  authorId: string
  contentId: string
  contentType: 'post' | 'story' | 'comment'
  updatedAt: Date
  createdAt: Date
}

export default ILike

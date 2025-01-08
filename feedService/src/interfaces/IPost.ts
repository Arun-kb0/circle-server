import { Document, Date} from 'mongoose'


interface IPost extends Document {
  _id: string,
  desc?: string
  tags?: string[]
  mediaType: 'image' | 'video' | 'text',
  media?: string[],
  authorId: string,
  status: 'active' | 'deleted' | 'blocked'
  likesCount: number
  reportsCount: number
  commentCount: number
  shareCount: number
  updatedAt: Date
  createdAt: Date
}

export default IPost

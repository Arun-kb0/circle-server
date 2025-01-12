import { Document, Date } from 'mongoose'

interface IComment extends Document {
  _id: string
  media: string
  mediaType: 'gif' | 'text'
  status: 'active' | 'deleted' | 'blocked'
  authorId: string
  parentId: string
  likesCount: number
  replayCount: number
  contentId: string
  contentType: 'post' | 'story' | 'comment'
  updatedAt: Date
  createdAt: Date
}

export interface ICommentExt extends IComment {
  authorName: string | undefined
  authorImage: string | undefined
}

export default IComment

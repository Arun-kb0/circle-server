import IPost, { IPostExt } from "./IPost"

interface IReport {
  _id: string
  userId: string
  contentId: string
  contentType: 'post' | 'story' | 'user' | 'comment'
  description?: string
  createdAt: string
  updatedAt: string
}

export interface IReportWithUsers extends IReport {
  userName?: string,
  userImage?: string
}

export interface IReportExt extends IReport {
  userName?: string,
  userImage?: string
  post?: IPost
}

export default IReport


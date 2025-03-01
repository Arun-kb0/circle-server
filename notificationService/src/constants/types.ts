import { INotificationExt } from "../interfaces/INotification";

export type SvcReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>

export type QueueNotificationDataType = {
  _id: string
  authorId: string
  receiverId: string
  type: 'call' | 'message' | 'follow' | 'like' | 'comment' | 'replay'
  message: string
  read: boolean
  createdAt: string
  updatedAt: string
  data: any
}

export type PaginationNotifications = {
  currentPage: number
  numberOfPages: number
  notifications: INotificationExt[]
}

export type ChatUserType = {
  userId: string
  name: string,
  image?: string
}
export interface INotification {
  _id: string
  authorId: string
  receiverId: string
  type: 'call' | 'message' | 'follow' | 'like' | 'comment' |'replay'
  message:string
  read: boolean
  createdAt: string
  updatedAt: string
}

export interface INotificationExt extends INotification {
  authorName: string
  authorImage?: string
}


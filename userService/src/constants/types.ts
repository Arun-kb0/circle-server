export type UsersCountType = {
  usersCount: number,
  femaleUsersCount: number,
  maleUsersCount: number,
  otherUsersCount: number
}


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
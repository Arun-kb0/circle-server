interface IMessage {
  _id: string,
  id: string
  roomId: string
  authorId: string
  receiverId: string
  mediaType: 'text' | 'audio' | 'photo' | 'gif'
  message: string
  createdAt: string
  updatedAt: string
  status: 'sent' | 'received' | 'seen'
}

export interface IMessageExt {
  _id: string,
  id: string
  roomId: string
  authorId: string
  authorName?: string
  authorImage?: string
  receiverId: string
  mediaType: 'text' | 'audio' | 'photo' | 'gif'
  message: string
  createdAt: string
  updatedAt: string
  status: 'sent' | 'received' | 'seen'
}

export default IMessage
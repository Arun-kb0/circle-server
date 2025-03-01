import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";


export interface AuthRequest extends Request {
  username?: string;
  userId?: string
  role?: 'admin' | 'user'
}


export interface JwtWithUsername extends JwtPayload {
  username: string
  userId: string
}


export type MessageType = {
  id: string
  roomId: string
  authorId: string
  authorName: string
  authorImage?: string
  receiverId: string
  mediaType: 'text' | 'audio' | 'photo'
  message: string
  createdAt: Date
  updatedAt: Date
  status: 'sent' | 'received' | 'seen'
}


export type ChatRoomType = {
  _id: string,
  roomId: string
  userId: string
  targetId: string
  createdAt: Date
  updatedAt: Date
}

export type JoinCallRoomDataType = {
  roomId?: string,
  userId?: string
}


export type ChatUserType = {
  userId: string
  name: string,
  image?: string
}


export type SignalDataType = {
  type: 'end-call'
  roomId: string
  caller: string
  receiverId: string
  offer?: RTCSessionDescription
  answer?: RTCSessionDescription
  candidate?: RTCIceCandidate
  user: ChatUserType
}

export type UserRoomNotificationType = {
  type: 'incoming-call'
  roomId: string
  caller: string
  chatUser?: ChatUserType
}

export type CallUserEventDataType = {
  signal: any
  from: string
  name: string
  userToCall: string,
  extraData: {
    authorId: string
    authorName: string
    authorImage?: string
    receiverId: string
    receiverName: string
  }
}

export type AnswerCallEventDataType = {
  to: string,
  signal: any
}

export type IceCandidateDataType = {
  candidate: RTCIceCandidateInit
  to: string
}


export type LiveUserDataType = {
  signal: any
  from: string
  name: string
  userId: string
}

export type LiveIceCandidateDataType = {
  candidate: RTCIceCandidateInit,
  to: string
  streamerUserId: string
}

export type AnswerLiveDataType = {
  signal: any
  to: string
  streamerUserId: string
}


export type LiveMessageType = {
  id: string
  streamerId: string
  authorId: string
  authorName: string
  authorImage?: string
  message: string
  createdAt: Date
  updatedAt: Date
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
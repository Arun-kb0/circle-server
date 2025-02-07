import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";


export interface AuthRequest extends Request {
  username?: string;
  userId?: string
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

export type SignalDataType = {
  type: 'end-call'
  roomId: string
  caller: string
  receiverId: string
  offer?: RTCSessionDescription
  answer?: RTCSessionDescription
  candidate?: RTCIceCandidate
}

export type UserRoomNotificationType = {
  type: 'incoming-call'
  roomId: string
  caller: string
}

import { Date, Schema } from "mongoose"
import IMessage from "../interfaces/IMessage"
import { Message } from "../proto/chat/Message"
import IChatRoom from "../interfaces/IChatRoom"
import { ChatRoom } from "../proto/chat/ChatRoom"

const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertMessageForGrpc = (messageData: IMessage): Message => {
  const { _id, id, roomId, authorId, authorName,
    authorImage, receiverId, mediaType,
    message, createdAt, updatedAt, status } = messageData
  const convertedMessage: Message = {
    _id, id, roomId, authorId, authorName,
    authorImage, receiverId, mediaType,
    message, status,
    createdAt: dateToString(createdAt),
    updatedAt: dateToString(updatedAt),
  }
  return convertedMessage
}

export const convertMessageForDb = (messageData: Message): Partial<IMessage> => {
  const { _id, id, roomId, authorId, authorName,
    authorImage, receiverId, mediaType,
    message, createdAt, updatedAt, status } = messageData
  const convertedMessage: Partial<IMessage> = {
    _id, id, roomId, authorId, authorName,
    authorImage, receiverId, message,
    mediaType: mediaType as IMessage['mediaType'],
    status: status as IMessage['status'],
    ...(createdAt ? { createdAt: stringToDate(createdAt as string) } : {}),
    ...(updatedAt ? { updatedAt: stringToDate(updatedAt as string) } : {}),
  }
  return convertedMessage
}

export const convertChatRoomForGrpc = (roomData: IChatRoom): ChatRoom => {
  const { _id, roomId, userId, targetId, createdAt, updatedAt } = roomData
  const convertedChatRoom: ChatRoom = {
    _id, roomId, userId, targetId,
    createdAt: dateToString(createdAt),
    updatedAt: dateToString(updatedAt),
  }
  return convertedChatRoom
}

export const convertChatRoomForDb = (roomData: ChatRoom): Partial<IChatRoom> => {
  const { _id, roomId, userId, targetId, createdAt, updatedAt } = roomData
  const convertedMessage: Partial<IChatRoom> = {
    _id, roomId, userId, targetId,
    ...(createdAt ? { createdAt: stringToDate(createdAt as string) } : {}),
    ...(updatedAt ? { updatedAt: stringToDate(updatedAt as string) } : {}),
  }
  return convertedMessage
}



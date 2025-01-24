import { Date as DbDate, ObjectId, Schema, Types } from "mongoose"
import IMessage from "../interfaces/IMessage"
import { Message } from "../proto/chat/Message"
import IChatRoom from "../interfaces/IChatRoom"
import { ChatRoom } from "../proto/chat/ChatRoom"
import { IChatRoomDb } from "../model/chatRoomModel"
import { IMessageDb } from '../model/messageModel'

const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertToObjectId = (id: string): Types.ObjectId | null => {
  return Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : null
}

const convertDbDateToIsoString = (dbDate: DbDate): string => {
  return new Date(dbDate.toString()).toISOString()
}


export const convertMessageToIMessage = (messageData: Message): Partial<IMessage> => {
  return {
    id: messageData.id,
    roomId: messageData.roomId,
    authorId: messageData.authorId?.toString(),
    receiverId: messageData.receiverId?.toString(),
    message: messageData.message,
    mediaType: messageData.mediaType as IMessage['mediaType'],
    status: messageData.status as IMessage['status'],
    createdAt: messageData.createdAt,
    updatedAt: messageData.updatedAt
  }
}

export const convertIChatRoomDbToCommonType = (chatRoom: IChatRoomDb): IChatRoom => {
  return {
    _id: chatRoom._id.toString(),
    roomId: chatRoom.roomId,
    userId: chatRoom.userId.toString(),
    targetId: chatRoom.targetId.toString(),
    createdAt: convertDbDateToIsoString(chatRoom.createdAt),
    updatedAt: convertDbDateToIsoString(chatRoom.updatedAt)
  }
}

export const convertIChatRoomToDbType = (chatRoom: Partial<IChatRoom>): Partial<IChatRoomDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    userId: convertToObjectId,
    targetId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }

  const chatRoomDb: Partial<IChatRoom> = {}

  Object.keys(chatRoom).forEach((key) => {
    const typedKey = key as keyof IChatRoom;
    if (chatRoom[typedKey] && conversionMap[typedKey]) {
      chatRoomDb[typedKey] = conversionMap[typedKey](chatRoom[typedKey])
    } else if (chatRoom[typedKey]) {
      chatRoomDb[typedKey] = chatRoom[typedKey]
    }
  })

  return chatRoomDb as Partial<IChatRoomDb>
}


export const convertIMessageDbToIMessage = (messageDb: IMessageDb): IMessage => {
  return {
    _id: messageDb._id.toString(),
    id: messageDb.id,
    roomId: messageDb.roomId,
    authorId: messageDb.authorId.toString(),
    receiverId: messageDb.receiverId.toString(),
    mediaType: messageDb.mediaType,
    message: messageDb.message,
    status: messageDb.status,
    createdAt: convertDbDateToIsoString(messageDb.createdAt),
    updatedAt: convertDbDateToIsoString(messageDb.updatedAt)
  }
}

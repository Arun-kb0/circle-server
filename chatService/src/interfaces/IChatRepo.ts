import { PaginationMessages } from '../constants/SvcReturnType'
import IChatRoom from './IChatRoom'
import IMessage, { IMessageExt } from './IMessage'


interface IChatRepo {
  createMessage(message: Partial<IMessage>): Promise<IMessageExt>
  updateMessage(messageId: string, message: Partial<IMessage>): Promise<IMessageExt | null>
  deleteMessage(messageId: string): Promise<IMessageExt | null>
  findMessageByUser(userId: string): Promise<IMessageExt[]>
  findMessageById(messageId: string): Promise<IMessageExt | null>
  getMessages(roomId: string, page: number): Promise<PaginationMessages>
  deleteRoomMessages(roomId: string): Promise<boolean>

  // * chat room
  createChatRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null>
  updateChatRoom(roomId: string, chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null>
  deleteChatRoom(chatRoomId: string): Promise<IChatRoom | null>
  findByIdChatRoom(chatRoomId: string): Promise<IChatRoom | null>

  findUsersChatLaseMessage(userIds:string[]) : Promise<IMessageExt[]>
}

export default IChatRepo
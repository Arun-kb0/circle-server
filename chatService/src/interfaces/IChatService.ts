import { PaginationMessages, SvcReturnType } from '../constants/SvcReturnType'
import IChatRoom from './IChatRoom'
import IMessage, { IMessageExt } from './IMessage'

interface IChatService {
  createMessage(message: Partial<IMessage>): SvcReturnType<IMessageExt>
  updateMessage(messageId: string, message: Partial<IMessage>): SvcReturnType<IMessageExt>
  deleteMessage(messageId: string): SvcReturnType<IMessageExt>
  findMessageByUser(userId: string): SvcReturnType<IMessageExt[]>
  findMessageById(messageId: string): SvcReturnType<IMessageExt | null>
  getMessages(roomId: string, page: number): SvcReturnType<PaginationMessages>
  deleteRoomMessages(roomId: string): SvcReturnType<boolean>

  // * chat room
  createChatRoom(chatRoom: Partial<IChatRoom>): SvcReturnType<IChatRoom | null>
  updateChatRoom(roomId: string, chatRoom: Partial<IChatRoom>): SvcReturnType<IChatRoom | null>
  deleteChatRoom(chatRoomId: string): SvcReturnType<IChatRoom | null>
  findByIdChatRoom(chatRoomId: string): SvcReturnType<IChatRoom | null>

  findUsersChatLaseMessage(userIds: string[]): SvcReturnType<IMessageExt[]>
}

export default IChatService
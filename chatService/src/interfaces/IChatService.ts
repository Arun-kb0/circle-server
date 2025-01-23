import { PaginationMessages, SvcReturnType } from '../constants/SvcReturnType'
import IChatRoom from './IChatRoom'
import IChat from './IMessage'

interface IChatService {
  createMessage(message: Partial<IChat>): SvcReturnType<IChat>
  updateMessage(message: Partial<IChat>): SvcReturnType<IChat>
  deleteMessage(messageId: string): SvcReturnType<IChat>
  findMessageByUser(userId: string): SvcReturnType<IChat[]>
  findMessageById(messageId: string): SvcReturnType<IChat | null>
  getMessages(roomId: string, page: number): SvcReturnType<PaginationMessages>
  deleteRoomMessages(roomId: string): SvcReturnType<boolean>
  
  // * chat room
  createChatRoom(chatRoom: Partial<IChatRoom>): SvcReturnType<IChatRoom | null>
  updateChatRoom(chatRoom: Partial<IChatRoom>): SvcReturnType<IChatRoom | null>
  deleteChatRoom(chatRoomId: string): SvcReturnType<IChatRoom | null>
  findByIdChatRoom(chatRoomId: string): SvcReturnType<IChatRoom[] | null>
}

export default IChatService
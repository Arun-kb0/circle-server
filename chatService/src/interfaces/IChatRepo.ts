import { PaginationMessages } from '../constants/SvcReturnType'
import IChatRoom from './IChatRoom'
import IMessage from './IMessage'


interface IChatRepo {
  createMessage(message: Partial<IMessage>): Promise<IMessage>
  updateMessage(message: Partial<IMessage>): Promise<IMessage | null>
  deleteMessage(messageId: string): Promise<IMessage | null>
  findMessageByUser(userId: string): Promise<IMessage[]>
  findMessageById(messageId: string): Promise<IMessage | null>
  getMessages(roomId: string, page: number): Promise<PaginationMessages>
  deleteRoomMessages(roomId:string) : Promise<boolean>
  
  // * chat room
  createChatRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null>
  updateChatRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null>
  deleteChatRoom(chatRoomId: string): Promise<IChatRoom | null>
  findByIdChatRoom(chatRoomId: string): Promise<IChatRoom[] | null>
}

export default IChatRepo
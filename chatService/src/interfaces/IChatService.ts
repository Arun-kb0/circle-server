import SvcReturnType from '../constants/SvcReturnType'
import IChat from './IChat'

interface IChatService  {
  createMessage(chat: Partial<IChat>): SvcReturnType<IChat>
  updateMessage(chat: Partial<IChat>): SvcReturnType<IChat>
  deleteMessage(roomId: string): SvcReturnType<IChat>
  findMessageByUser(userId: string): SvcReturnType<IChat[]>
  findMessageById(id: string): SvcReturnType<IChat | null>
}

export default IChatService
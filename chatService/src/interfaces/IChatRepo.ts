import IChat from '../interfaces/IChat'


interface IChatBaseRepo {
  creteMessage(chat: Partial<IChat>): Promise<IChat>
  updateMessage(chat: Partial<IChat>): Promise<IChat>
  deleteMessage(chatId: string): Promise<IChat>
  findMessageByUser(userId: string): Promise<IChat[]>
  findMessageById(id: string): Promise<IChat>
}

export default IChatBaseRepo
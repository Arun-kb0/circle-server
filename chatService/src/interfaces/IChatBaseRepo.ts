import IChat from '../interfaces/IChat'

interface IChatBaseRepo {
  create(chat: Partial<IChat>): Promise<IChat>
  update(chat: Partial<IChat>): Promise<IChat>
  delete(chatId: string): Promise<IChat>
  findByUser(userId: string): Promise<IChat[]>
  findById(id: string): Promise<IChat>
}

export default IChatBaseRepo
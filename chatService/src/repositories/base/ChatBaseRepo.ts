import IChat from '../../interfaces/IChat';
import IChatBaseRepo from '../../interfaces/IChatBaseRepo'

class ChatBaseRepo implements IChatBaseRepo {

  create(chat: Partial<IChat>): Promise<IChat> {
    throw new Error('Method not implemented.');
  }
  update(chat: Partial<IChat>): Promise<IChat> {
    throw new Error('Method not implemented.');
  }
  delete(chatId: string): Promise<IChat> {
    throw new Error('Method not implemented.');
  }
  findByUser(userId: string): Promise<IChat[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<IChat> {
    throw new Error('Method not implemented.');
  }
  
}


export default ChatBaseRepo
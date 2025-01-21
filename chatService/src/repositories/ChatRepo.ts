import IChat from "../interfaces/IChat";
import IChatBaseRepo from "../interfaces/IChatBaseRepo";
import IChatRepo from "../interfaces/IChatRepo";


class ChatRepo implements IChatRepo {

  constructor(
    private chatBaseRepo: IChatBaseRepo
  ) { }

  creteMessage(chat: Partial<IChat>): Promise<IChat> {
    throw new Error("Method not implemented.");
  }
  updateMessage(chat: Partial<IChat>): Promise<IChat> {
    throw new Error("Method not implemented.");
  }
  deleteMessage(chatId: string): Promise<IChat> {
    throw new Error("Method not implemented.");
  }
  findMessageByUser(userId: string): Promise<IChat[]> {
    throw new Error("Method not implemented.");
  }
  findMessageById(id: string): Promise<IChat> {
    throw new Error("Method not implemented.");
  }

}

export default ChatRepo
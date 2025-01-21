import SvcFuncReturnType from "../constants/SvcReturnType";
import IChat from "../interfaces/IChat";
import IChatService from "../interfaces/IChatService";
import IChatRepo from "../interfaces/IChatRepo";

class ChatService implements IChatService {

  constructor(
    private chatRepo: IChatRepo
  ) { }

  createMessage(chat: Partial<IChat>): SvcFuncReturnType<IChat> {
    throw new Error("Method not implemented.");
  }
  updateMessage(chat: Partial<IChat>): SvcFuncReturnType<IChat> {
    throw new Error("Method not implemented.");
  }
  deleteMessage(roomId: string): SvcFuncReturnType<IChat> {
    throw new Error("Method not implemented.");
  }
  findMessageByUser(userId: string): SvcFuncReturnType<IChat[]> {
    throw new Error("Method not implemented.");
  }
  findMessageById(id: string): SvcFuncReturnType<IChat | null> {
    throw new Error("Method not implemented.");
  }

}

export default ChatService
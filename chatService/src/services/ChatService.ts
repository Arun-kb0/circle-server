import { SvcReturnType } from "../constants/SvcReturnType";
import IChat from "../interfaces/IMessage";
import IChatService from "../interfaces/IChatService";
import IChatRepo from "../interfaces/IChatRepo";
import handleError from "../util/handleError";
import IChatRoom from "../interfaces/IChatRoom";

class ChatService implements IChatService {

  constructor(
    private chatRepo: IChatRepo
  ) { }

  async createMessage(message: Partial<IChat>): SvcReturnType<IChat> {
    try {
      const newMessage = await this.chatRepo.createMessage(message)
      return { err: null, data: newMessage }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async updateMessage(message: Partial<IChat>): SvcReturnType<IChat> {
    try {
      const updatedMessage = await this.chatRepo.updateMessage(message)
      return { err: null, data: updatedMessage }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async deleteMessage(roomId: string): SvcReturnType<IChat> {
    try {
      const message = await this.chatRepo.deleteMessage(roomId)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async findMessageByUser(userId: string): SvcReturnType<IChat[]> {
    try {
      const message = await this.chatRepo.findMessageByUser(userId)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async findMessageById(messageId: string): SvcReturnType<IChat | null> {
    try {
      const message = await this.chatRepo.findMessageById(messageId)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }


  // * chat room

  async createChatRoom(chatRoom: Partial<IChatRoom>): SvcReturnType<IChatRoom | null> {
    try {
      const message = await this.chatRepo.createChatRoom(chatRoom)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async updateChatRoom(chatRoom: Partial<IChatRoom>): SvcReturnType<IChatRoom | null> {
    try {
      const message = await this.chatRepo.updateChatRoom(chatRoom)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    } 
  }

  async deleteChatRoom(chatRoomId: string): SvcReturnType<IChatRoom | null> {
    try {
      const message = await this.chatRepo.deleteChatRoom(chatRoomId)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async findByIdChatRoom(chatRoomId: string): SvcReturnType<IChatRoom[] | null> {
    try {
      const message = await this.chatRepo.findByIdChatRoom(chatRoomId)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }
  
}

export default ChatService
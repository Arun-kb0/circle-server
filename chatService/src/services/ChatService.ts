import { PaginationMessages, SvcReturnType } from "../constants/SvcReturnType";
import IMessage, { IMessageExt } from "../interfaces/IMessage";
import IChatService from "../interfaces/IChatService";
import IChatRepo from "../interfaces/IChatRepo";
import handleError from "../util/handleError";
import IChatRoom from "../interfaces/IChatRoom";

class ChatService implements IChatService {

  constructor(
    private chatRepo: IChatRepo
  ) { }


  async deleteRoomMessages(roomId: string): SvcReturnType<boolean> {
    try {
      const res = await this.chatRepo.deleteRoomMessages(roomId)
      return { err: null, data: res }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async getMessages(roomId: string, page: number): SvcReturnType<PaginationMessages> {
    try {
      const res = await this.chatRepo.getMessages(roomId, page)
      return { err: null, data: res }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async createMessage(message: Partial<IMessage>): SvcReturnType<IMessageExt> {
    try {
      const newMessage = await this.chatRepo.createMessage(message)
      return { err: null, data: newMessage }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async updateMessage(messageId: string, message: Partial<IMessage>): SvcReturnType<IMessageExt> {
    try {
      const updatedMessage = await this.chatRepo.updateMessage(messageId, message)
      return { err: null, data: updatedMessage }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async deleteMessage(messageId: string): SvcReturnType<IMessageExt> {
    try {
      const message = await this.chatRepo.deleteMessage(messageId)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async findMessageByUser(userId: string): SvcReturnType<IMessageExt[]> {
    try {
      const message = await this.chatRepo.findMessageByUser(userId)
      return { err: null, data: message }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async findMessageById(messageId: string): SvcReturnType<IMessageExt | null> {
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

  async updateChatRoom(roomId: string, chatRoom: Partial<IChatRoom>): SvcReturnType<IChatRoom | null> {
    try {
      const message = await this.chatRepo.updateChatRoom(roomId, chatRoom)
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

  async findByIdChatRoom(chatRoomId: string): SvcReturnType<IChatRoom | null> {
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
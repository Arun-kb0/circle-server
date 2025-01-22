import IMessage from "../interfaces/IMessage";
import IMessageBaseRepo from "../interfaces/IMessageBaseRepo";
import IChatRepo from "../interfaces/IChatRepo";
import IChatRoomBaseRepo from "../interfaces/IChatRoomBaseRepo";
import handleError from "../util/handleError";
import { PaginationMessages } from "../constants/SvcReturnType";
import IChatRoom from "../interfaces/IChatRoom";

const LIMIT = 10

class ChatRepo implements IChatRepo {

  constructor(
    private messageBaseRepo: IMessageBaseRepo,
    private chatRoomBaseRepo: IChatRoomBaseRepo
  ) { }
  
  async getMessages(roomId: string, page: number): Promise<PaginationMessages> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.messageBaseRepo.getMessagesCount(roomId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const messages = await this.messageBaseRepo.getMessages(roomId, LIMIT, startIndex)
      const messagePagination = {
        currentPage: page,
        numberOfPages,
        messages
      }
      return messagePagination
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  // *  base message calls
  async createMessage(message: Partial<IMessage>): Promise<IMessage> {
    try {
      const newMessage = await this.messageBaseRepo.create(message)
      return newMessage
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateMessage(message: Partial<IMessage>): Promise<IMessage | null> {
    try {
      const updateUser = await this.messageBaseRepo.update(message)
      return updateUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteMessage(messageId: string): Promise<IMessage | null> {
    try {
      const deletedMessage = await this.messageBaseRepo.delete(messageId)
      return deletedMessage
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findMessageByUser(userId: string): Promise<IMessage[]> {
    try {
      const foundUser = await this.messageBaseRepo.findByUser(userId)
      return foundUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findMessageById(messageId: string): Promise<IMessage | null> {
    try {
      const foundUser = await this.messageBaseRepo.findById(messageId)
      return foundUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  // * base chatRoom calls
  async createChatRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
   try {
     const newRoom = await this.chatRoomBaseRepo.create(chatRoom)
      return newRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

 async updateChatRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
   try {
      const updatedRoom = await this.chatRoomBaseRepo.update(chatRoom)
      return updatedRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteChatRoom(chatRoomId: string): Promise<IChatRoom | null> {
   try {
      const deletedRoom = await this.chatRoomBaseRepo.delete(chatRoomId)
      return deletedRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByIdChatRoom(chatRoomId: string): Promise<IChatRoom[] | null> {
   try {
      const foundRoom = await this.chatRoomBaseRepo.findById(chatRoomId)
      return foundRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default ChatRepo
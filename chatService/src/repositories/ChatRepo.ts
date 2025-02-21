import IMessage, { IMessageExt } from "../interfaces/IMessage";
import IMessageBaseRepo from "../interfaces/IMessageBaseRepo";
import IChatRepo from "../interfaces/IChatRepo";
import IChatRoomBaseRepo from "../interfaces/IChatRoomBaseRepo";
import handleError from "../util/handleError";
import { PaginationMessages } from "../constants/SvcReturnType";
import IChatRoom from "../interfaces/IChatRoom";
import { addUsersToMessages, addUserToMessage } from '../util/userClientFunctions'

const LIMIT = 10

class ChatRepo implements IChatRepo {

  constructor(
    private messageBaseRepo: IMessageBaseRepo,
    private chatRoomBaseRepo: IChatRoomBaseRepo
  ) { }

  // *  base message calls
  async getMessages(roomId: string, page: number): Promise<PaginationMessages> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.messageBaseRepo.getMessagesCount(roomId)
      const numberOfPages = Math.ceil(total / LIMIT)

      const messages = await this.messageBaseRepo.getMessages(roomId, LIMIT, startIndex)
      const msgsWithUser = await addUsersToMessages(messages)
      const messagePagination = {
        messages: msgsWithUser,
        currentPage: page,
        numberOfPages,
      }
      return messagePagination
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createMessage(message: Partial<IMessage>): Promise<IMessageExt> {
    try {
      const newMessage = await this.messageBaseRepo.createMessage(message)
      const msgWithUser = await addUserToMessage(newMessage)
      return msgWithUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateMessage(messageId: string, message: Partial<IMessage>): Promise<IMessageExt | null> {
    try {
      const updatedUser = await this.messageBaseRepo.updateMessage(messageId, message)
      if (!updatedUser) return null
      const msgWithUser = await addUserToMessage(updatedUser)
      return msgWithUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteMessage(messageId: string): Promise<IMessageExt | null> {
    try {
      const deletedMessage = await this.messageBaseRepo.deleteMessage(messageId)
      if (!deletedMessage) return null
      const msgWithUser = await addUserToMessage(deletedMessage)
      return msgWithUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteRoomMessages(roomId: string): Promise<boolean> {
    try {
      const isDeleted = await this.messageBaseRepo.deleteMessageByRoomId(roomId)
      return isDeleted
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findMessageByUser(userId: string): Promise<IMessageExt[]> {
    try {
      const foundMessage = await this.messageBaseRepo.findMessageByUser(userId)
      if (!foundMessage) return []
      const msgWithUser = await addUsersToMessages(foundMessage)
      return msgWithUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findMessageById(messageId: string): Promise<IMessageExt | null> {
    try {
      const foundMessage = await this.messageBaseRepo.findMessageById(messageId)
      if (!foundMessage) return null
      const msgWithUser = await addUserToMessage(foundMessage)
      return msgWithUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  // * base chatRoom calls
  async createChatRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
    try {
      const newRoom = await this.chatRoomBaseRepo.createRoom(chatRoom)
      return newRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateChatRoom(roomId: string, chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
    try {
      const updatedRoom = await this.chatRoomBaseRepo.updateRoom(roomId, chatRoom)
      return updatedRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteChatRoom(chatRoomId: string): Promise<IChatRoom | null> {
    try {
      const deletedRoom = await this.chatRoomBaseRepo.deleteRoom(chatRoomId)
      return deletedRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByIdChatRoom(chatRoomId: string): Promise<IChatRoom | null> {
    try {
      const foundRoom = await this.chatRoomBaseRepo.findRoomById(chatRoomId)
      return foundRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default ChatRepo
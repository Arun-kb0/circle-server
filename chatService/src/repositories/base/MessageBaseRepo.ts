import IMessage from '../../interfaces/IMessage'
import IChatBaseRepo from '../../interfaces/IMessageBaseRepo'
import { Message } from '../../model/messageModel'
import handleError from '../../util/handleError'


class MessageBaseRepo implements IChatBaseRepo {

  async getMessagesCount(roomId: string): Promise<number> {
    try {
      const messageCount = await Message.countDocuments({ roomId: roomId })
      return messageCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  async getMessages(roomId: string, limit: number, startIndex: number): Promise<IMessage[]> {
    try {
      const messageCount = await Message.find({ roomId: roomId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      return messageCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async create(message: Partial<IMessage>): Promise<IMessage> {
    try {
      const newMessage = await Message.create(message)
      return newMessage
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async update(message: Partial<IMessage>): Promise<IMessage | null> {
    try {
      const updatedMessage = await Message.findOneAndUpdate(
        { id: message.id },
        { $set: message },
        { new: true }
      )
      return updatedMessage ? updatedMessage.toObject() : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async delete(messageId: string): Promise<IMessage | null> {
    try {
      const deletedMessage = await Message.findOneAndDelete({ id: messageId })
      return deletedMessage ? deletedMessage.toObject() : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByUser(userId: string): Promise<IMessage[]> {
    try {
      const foundMessages = await Message.find({ authorId: userId })
      return foundMessages
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findById(messageId: string): Promise<IMessage | null> {
    try {
      const message = await Message.findOne({ id: messageId })
      return message ? message.toObject() : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }



}


export default MessageBaseRepo
import IMessage from '../../interfaces/IMessage'
import IMessageBaseRepo from '../../interfaces/IMessageBaseRepo'
import { Message } from '../../model/messageModel'
import handleError from '../../util/handleError'
import { convertIMessageDbToIMessage, convertToObjectId } from '../../util/converter'


class MessageBaseRepo implements IMessageBaseRepo {

  async findLastMessageByRoomIds(roomIds: string[]): Promise<IMessage[]> {
    try {
      const messages = await Message.aggregate([
        { $match: { roomId: { $in: roomIds } } },
        { $sort: { createdAt: -1 } },
        { $group: { _id: "$roomId", lastMessage: { $first: "$$ROOT" } } },
        { $replaceRoot: { newRoot: "$lastMessage" } }
      ])
      if (!messages || messages.length === 0) return []
      const convertedMessages = messages.map(item => convertIMessageDbToIMessage(item))
      return convertedMessages
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

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
      const messages = await Message.find({ roomId: roomId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      return messages.map(msg => convertIMessageDbToIMessage(msg))
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createMessage(message: Partial<IMessage>): Promise<IMessage> {
    try {
      console.log(message)
      const newMessage = await Message.create(message)
      return convertIMessageDbToIMessage(newMessage)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateMessage(messageId: string, message: Partial<IMessage>): Promise<IMessage | null> {
    try {
      const updatedMessage = await Message.findOneAndUpdate(
        { id: messageId },
        { $set: message },
        { new: true }
      )
      return updatedMessage ? convertIMessageDbToIMessage(updatedMessage.toObject()) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteMessage(messageId: string): Promise<IMessage | null> {
    try {
      const deletedMessage = await Message.findOneAndDelete({ id: messageId })
      return deletedMessage ? convertIMessageDbToIMessage(deletedMessage.toObject()) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findMessageByUser(userId: string): Promise<IMessage[]> {
    try {
      const foundMessages = await Message.find({ authorId: userId })
      return foundMessages.map(msg => convertIMessageDbToIMessage(msg))
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findMessageById(messageId: string): Promise<IMessage | null> {
    try {
      const message = await Message.findOne({ id: messageId })
      return message ? convertIMessageDbToIMessage(message.toObject()) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteMessageByRoomId(roomId: string): Promise<boolean> {
    try {
      const res = await Message.deleteMany({ roomId })
      return res.deletedCount > 1
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}


export default MessageBaseRepo
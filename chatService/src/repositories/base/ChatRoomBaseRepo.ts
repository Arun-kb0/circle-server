import IChatRoom from '../../interfaces/IChatRoom';
import IChatRoomBaseRepo from '../../interfaces/IChatRoomBaseRepo'
import handleError from '../../util/handleError';
import { ChatRoom } from '../../model/chatRoomMode'

class ChatRoomBaseRepo implements IChatRoomBaseRepo {

  async create(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
    try {
      const newChatRoom = await ChatRoom.create(chatRoom)
      return newChatRoom
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async update(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
    try {
      const updatedChatRoom = await ChatRoom.findOneAndUpdate(
        { roomId: chatRoom.roomId },
        { $set: chatRoom },
        { new: true }
      )
      return updatedChatRoom ? updatedChatRoom.toObject() : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async delete(chatRoomId: string): Promise<IChatRoom | null> {
    try {
      const deletedMessage = await ChatRoom.findOneAndDelete({ roomID: chatRoomId })
      return deletedMessage ? deletedMessage.toObject() : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findById(chatRoomId: string): Promise<IChatRoom[] | null> {
    try {
      const foundMessages = await ChatRoom.find({ roomId: chatRoomId })
      return foundMessages 
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default ChatRoomBaseRepo
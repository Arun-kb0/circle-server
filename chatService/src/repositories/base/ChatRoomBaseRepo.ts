import IChatRoom from '../../interfaces/IChatRoom';
import IChatRoomBaseRepo from '../../interfaces/IChatRoomBaseRepo'
import handleError from '../../util/handleError';
import { ChatRoom } from '../../model/chatRoomModel'
import { convertIChatRoomDbToCommonType, convertIChatRoomToDbType } from '../../util/converter';

class ChatRoomBaseRepo implements IChatRoomBaseRepo {

  async createRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
    try {
      const convertedChatRoom = convertIChatRoomToDbType(chatRoom)
      const newChatRoom = await ChatRoom.create(convertedChatRoom)
      return convertIChatRoomDbToCommonType(newChatRoom)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateRoom(roomId: string, chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null> {
    try {
      const updatedChatRoom = await ChatRoom.findOneAndUpdate(
        { roomId: roomId },
        { $set: chatRoom },
        { new: true }
      )
      return updatedChatRoom ? convertIChatRoomDbToCommonType(updatedChatRoom.toObject()) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteRoom(chatRoomId: string): Promise<IChatRoom | null> {
    try {
      const deletedRoom = await ChatRoom.findOneAndDelete({ roomID: chatRoomId })
      return deletedRoom ? convertIChatRoomDbToCommonType(deletedRoom.toObject()) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findRoomById(chatRoomId: string): Promise<IChatRoom | null> {
    try {
      const foundRoom = await ChatRoom.findOne({ roomId: chatRoomId })
      return foundRoom ? convertIChatRoomDbToCommonType(foundRoom) : null 
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default ChatRoomBaseRepo
import IChatRoom from '../interfaces/IChatRoom'

interface IChatRoomBaseRepo {
  createRoom(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null>
  updateRoom(roomId: string, chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null>
  deleteRoom(chatRoomId: string): Promise<IChatRoom | null>
  findRoomById(chatRoomId: string): Promise<IChatRoom | null>
  findRoomIdsByUserIds(userIds: string[]): Promise<string[]>
}

export default IChatRoomBaseRepo
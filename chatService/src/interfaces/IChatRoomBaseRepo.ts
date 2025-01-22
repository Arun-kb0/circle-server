import IChatRoom from '../interfaces/IChatRoom'

interface IChatRoomBaseRepo {
  create(chatRoom: Partial<IChatRoom>): Promise<IChatRoom | null>
  update(chatRoom: Partial<IChatRoom>): Promise<IChatRoom| null>
  delete(chatRoomId: string): Promise<IChatRoom | null>
  findById(chatRoomId: string): Promise<IChatRoom[] | null>
}

export default IChatRoomBaseRepo
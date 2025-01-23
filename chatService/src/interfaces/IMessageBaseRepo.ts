import IMessage from './IMessage'

interface IMessageBaseRepo {
  getMessagesCount(roomId: string): Promise<number>
  getMessages(roomId: string, limit: number, startIndex: number): Promise<IMessage[]>

  create(message: Partial<IMessage>): Promise<IMessage>
  update(message: Partial<IMessage>): Promise<IMessage | null>
  delete(messageId: string): Promise<IMessage | null>
  deleteByRoomId(roomId: string): Promise<boolean>
  findByUser(userId: string): Promise<IMessage[]>
  findById(messageId: string): Promise<IMessage | null>
}

export default IMessageBaseRepo
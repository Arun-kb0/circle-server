import IMessage from './IMessage'

interface IMessageBaseRepo {
  getMessagesCount(roomId: string): Promise<number>
  getMessages(roomId: string, limit: number, startIndex: number): Promise<IMessage[]>

  createMessage(message: Partial<IMessage>): Promise<IMessage>
  updateMessage(messageId:string, message: Partial<IMessage>): Promise<IMessage | null>
  deleteMessage(messageId: string): Promise<IMessage | null>
  deleteMessageByRoomId(roomId: string): Promise<boolean>
  findMessageByUser(userId: string): Promise<IMessage[]>
  findMessageById(messageId: string): Promise<IMessage | null>
  findLastMessageByRoomIds(roomIds: string[]): Promise<IMessage[]>
}

export default IMessageBaseRepo
import { PaginationNotifications } from '../constants/types'
import './INotification'
import { INotification } from './INotification'

interface INotificationBaseRepo {
  findNotificationsByReceiverIdCount(receiverId:string):Promise<number>
  findNotificationsByReceiverId(receiverId: string, limit: number, startIndex: number): Promise<INotification[]>
  createNotification(notification: Omit<INotification, "_id" | "cratedAt" | "updatedAt">): Promise<INotification>
  readMultipleNotifications(notificationIds: string[]): Promise<string[]>
  updateNotification(notification: Partial<INotification>): Promise<INotification>
}


export default INotificationBaseRepo
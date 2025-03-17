import { PaginationNotifications, QueueNotificationDataType } from "../constants/types"
import { INotification } from "./INotification"

interface INotificationRepo {
  createNotification(notification: Omit<INotification, '_id' | 'cratedAt' | 'updatedAt'>): Promise<INotification>
  readNotifications(notificationIds: string[]): Promise<string[]>
  getNotifications(receiverId: string, page: number): Promise<PaginationNotifications>
}

export default INotificationRepo

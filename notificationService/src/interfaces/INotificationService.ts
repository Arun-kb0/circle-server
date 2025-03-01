import { INotificationExt } from "./INotification";
import { PaginationNotifications, QueueNotificationDataType, SvcReturnType } from '../constants/types'

interface INotificationService {
  handleNotification(data: QueueNotificationDataType): Promise<void>
  handleLikeNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean }>
  handleCommentNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean }>
  handleCallNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean }>
 
  sendNotification(notification: Omit<INotificationExt, '_id'>,data?:any): SvcReturnType<{ status: boolean }>

  readNotifications(notificationIds: string[]): SvcReturnType<string[]>
  getNotifications(receiverId: string, page: number): SvcReturnType<PaginationNotifications>
}

export default INotificationService
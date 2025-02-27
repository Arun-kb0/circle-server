import { INotification } from "./INotification";
import { QueueNotificationDataType, SvcReturnType } from '../constants/types'

interface INotificationService {
  handleNotification(data: QueueNotificationDataType): Promise<void>

  handleLikeNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean }>

  sendNotification(notification: Omit<INotification, '_id'>): SvcReturnType<{ status: boolean }>
}

export default INotificationService
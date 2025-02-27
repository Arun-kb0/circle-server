import { INotification } from "./INotification";
import { QueueNotificationDataType, SvcReturnType } from '../constants/types'

interface INotificationService {
  sendNotification(notification: INotification): SvcReturnType<{ status: boolean }>
  sendLikeNotifications(data: QueueNotificationDataType): SvcReturnType<{ status: boolean }>

}

export default INotificationService
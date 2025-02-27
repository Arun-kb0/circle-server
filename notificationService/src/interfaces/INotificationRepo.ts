import { QueueNotificationDataType } from "../constants/types"
import { INotification } from "./INotification"

interface INotificationRepo {
  publishNotification(notification: INotification): Promise<{ status: boolean }>
  sendNotifications(data: INotification): Promise<{ status: boolean }>

}

export default INotificationRepo

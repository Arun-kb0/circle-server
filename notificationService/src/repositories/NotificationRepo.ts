import { INotification } from "../interfaces/INotification";
import INotificationRepo from "../interfaces/INotificationRepo";
import IQueueBaseRepo from "../interfaces/IQueueBaseRepo";
import handleError from "../util/handleError";
import { publishMessage } from '../util/rabbitmq'

const QUEUE_NAME = process.env.QUEUE_NAME || ''

class NotificationRepo implements INotificationRepo {

  constructor(
    private queueBaseRepo: IQueueBaseRepo
  ) { }

  async sendNotifications(notification: INotification): Promise<{ status: boolean; }> {
    try {
      console.log('notification repo')
      console.log(notification)
      return { status: true }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async publishNotification(notification: INotification): Promise<{ status: boolean; }> {
    try {
      publishMessage(QUEUE_NAME, JSON.stringify(notification))
      return { status: true }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }




}

export default NotificationRepo
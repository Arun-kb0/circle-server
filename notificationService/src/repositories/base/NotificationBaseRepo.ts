import { INotification } from "../../interfaces/INotification";
import INotificationBaseRepo from "../../interfaces/INotificationBaseRepo";
import handleError from '../../util/handleError'
import { Notification } from '../../model/notificationModel'
import {
  convertINotificationDbToINotification,
  convertINotificationToINotificationDb, convertToObjectId
} from "../../util/converter";

class NotificationBaseRepo implements INotificationBaseRepo {

  async findNotificationsByReceiverIdCount(receiverId: string): Promise<number> {
    try {
      const count = await Notification.countDocuments({ receiverId })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findNotificationsByReceiverId(receiverId: string, limit: number, startIndex: number): Promise<INotification[]> {
    try {
      const notifications = await Notification.find({ receiverId }).limit(limit).skip(startIndex) 
      return notifications.map(item => convertINotificationDbToINotification(item))
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createNotification(notification: Omit<INotification, "_id" | "cratedAt" | "updatedAt">): Promise<INotification> {
    try {
      const convertedNotification = convertINotificationToINotificationDb(notification)
      console.log('converted notifications')
      console.log(convertedNotification)
      
      const newNotification = await Notification.create(convertedNotification)
      return convertINotificationDbToINotification(newNotification)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async readMultipleNotifications(notificationIds: string[]): Promise<string[]> {
    try {
      const notificationObjIds = notificationIds.map(id => convertToObjectId(id))
      const res = await Notification.updateMany(
        { _id: { $in: notificationObjIds } },
        { $set: { read: true } }
      )
      if (res.modifiedCount !== notificationIds.length) {
        throw new Error('read notification failed')
      }
      return notificationIds
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  updateNotification(notification: Partial<INotification>): Promise<INotification> {
    throw new Error("Method not implemented.");
  }

}

export default NotificationBaseRepo
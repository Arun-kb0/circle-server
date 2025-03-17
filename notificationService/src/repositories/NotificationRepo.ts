import { INotification } from "../interfaces/INotification";
import INotificationRepo from "../interfaces/INotificationRepo";
import INotificationBaseRepo from "../interfaces/INotificationBaseRepo";
import handleError from "../util/handleError";
import { PaginationNotifications } from "../constants/types";
import { addUserToNotifications } from '../util/notificationClientFunctions'

const LIMIT = 10

class NotificationRepo implements INotificationRepo {

  constructor(
    private notificationBaseRepo: INotificationBaseRepo
  ) { }

  async getNotifications(receiverId: string, page: number): Promise<PaginationNotifications> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.notificationBaseRepo.findNotificationsByReceiverIdCount(receiverId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const notifications = await this.notificationBaseRepo.findNotificationsByReceiverId(receiverId, LIMIT, startIndex)
      const notificationWithUsers = await addUserToNotifications(notifications)
      return {
        notifications: notificationWithUsers,
        numberOfPages,
        currentPage: page + 1
      }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createNotification(notification: Omit<INotification, "_id" | "cratedAt" | "updatedAt">): Promise<INotification> {
    try {
      const newNotification = await this.notificationBaseRepo.createNotification(notification)
      return newNotification
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async readNotifications(notificationIds: string[]): Promise<string[]> {
    try {
      const updatedIds = await this.notificationBaseRepo.readMultipleNotifications(notificationIds)
      return updatedIds
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default NotificationRepo
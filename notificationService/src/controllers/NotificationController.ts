import INotificationController, { GetNotificationsHandler, ReadNotificationsHandler } from "../interfaces/INotificationController";
import INotificationService from "../interfaces/INotificationService";
import handleError from '../util/handleError'
import { validateRequest, validateResponse } from '../util/validations'

class NotificationController implements INotificationController {

  constructor(
    private notificationService: INotificationService
  ) { }

  getNotifications: GetNotificationsHandler = async (call, cb) => {
    try {
      const { page, receiverId } = call.request
      validateRequest('page and receiverId is required', page, receiverId)
      const res = await this.notificationService.getNotifications(receiverId as string, page as number)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  readNotifications: ReadNotificationsHandler = async (call, cb) => {
    try {
      const { notificationIds } = call.request
      validateRequest('notification is required.', notificationIds)
      const res = await this.notificationService.readNotifications(notificationIds as string[])
      validateResponse(res)
      cb(null, { notificationIds: res.data ? res.data : [] })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }


}

export default NotificationController
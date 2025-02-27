import INotificationController, { SendNotificationHandler } from "../interfaces/INotificationController";
import INotificationService from "../interfaces/INotificationService";
import handleError from '../util/handleError'

class NotificationController implements INotificationController {

  constructor(
    private notificationService: INotificationService
  ) { }

  sendNotification: SendNotificationHandler = async (call, cb) => {
    try {
      const { notification } = call.request
      throw new Error('not implemented')
    } catch (error) {
      const { message, code } = handleError(error)
      cb({ message, code }, null)
    }
  }

}

export default NotificationController
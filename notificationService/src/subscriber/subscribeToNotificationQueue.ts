import QueueBaseRepo from "../repositories/base/QueueBaseRepo"
import { notificationService } from '../DI'
import { QueueNotificationDataType } from "../constants/types"


const subscribeToNotificationQueue = async () => {
  const queueBaseRepo = new QueueBaseRepo()
  await queueBaseRepo.connect()

  queueBaseRepo.subscribe((message:QueueNotificationDataType) => {
    console.log('received event')
    switch (message.type) {
      case 'like':
        notificationService.sendLikeNotifications(message)
        break;
      default:
        console.log('no matching call found')
    }
    notificationService.sendNotification(message)
  })
}

export default subscribeToNotificationQueue
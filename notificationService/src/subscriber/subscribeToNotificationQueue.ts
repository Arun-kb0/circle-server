import QueueBaseRepo from "../repositories/base/QueueBaseRepo"
import { notificationService } from '../DI'
import { QueueNotificationDataType } from "../constants/types"


const subscribeToNotificationQueue = async () => {
  const queueBaseRepo = new QueueBaseRepo()
  await queueBaseRepo.connect()

  queueBaseRepo.subscribe((message:QueueNotificationDataType) => {
    notificationService.handleNotification(message)
  })
}

export default subscribeToNotificationQueue
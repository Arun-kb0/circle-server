import NotificationRepo from './repositories/NotificationRepo'
import NotificationService from './services/NotificationService'
import NotificationController from './controllers/NotificationController'
import QueueBaseRepo from './repositories/base/QueueBaseRepo'


const queueBaseRepo = new QueueBaseRepo()
const notificationRepo = new NotificationRepo(queueBaseRepo)
export const notificationService = new NotificationService(notificationRepo)
export const notificationController = new NotificationController(notificationService)


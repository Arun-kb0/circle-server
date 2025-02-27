import NotificationRepo from './repositories/NotificationRepo'
import NotificationService from './services/NotificationService'
import NotificationController from './controllers/NotificationController'
import QueueBaseRepo from './repositories/base/QueueBaseRepo'
import UseSocketIo from './config/UseSocketIo'

const socket = UseSocketIo.getInstance()

const queueBaseRepo = new QueueBaseRepo()
const notificationRepo = new NotificationRepo(queueBaseRepo)
export const notificationService = new NotificationService(
  notificationRepo,
  socket
)
export const notificationController = new NotificationController(notificationService)


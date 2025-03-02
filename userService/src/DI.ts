import { UserRepo } from './repositories/UserRepo'
import FollowRepo from './repositories/FollowRepo'
import { UserService } from './services/UserService'
import { UserController } from './controllers/UserController'
import FollowService from './services/FollowService'
import FollowController from './controllers/FollowController'
import UserBaseRepo from './repositories/base/UserBaseRepo'
import FollowBaseRepo from './repositories/base/FollowBaseRepo'

const QUEUE_NAME = process.env.NOTIFICATION_QUEUE_NAME || 'notification-queue'

const userBaseRepo = new UserBaseRepo()
const userRepo = new UserRepo(userBaseRepo)
export const userService = new UserService(userRepo)
export const userController = new UserController(userService)

const followBaseRepo = new FollowBaseRepo()
export const followRepo = new FollowRepo(
  followBaseRepo,
  userRepo
)
export const followService = new FollowService(followRepo, QUEUE_NAME)
export const followController = new FollowController(followService)


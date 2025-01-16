import { UserRepo } from './repositories/UserRepo'
import FollowRepo from './repositories/FollowRepo'
import { UserService } from './services/UserService'
import { UserController } from './controllers/UserController'
import FollowService from './services/FollowService'
import FollowController from './controllers/FollowController'

const userRepo = new UserRepo()
export const userService = new UserService(userRepo)
export const userController = new UserController(userService)

export const followRepo = new FollowRepo(userRepo)
export const followService = new FollowService(followRepo)
export const followController = new FollowController(followService)


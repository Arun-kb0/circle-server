import { UserRepo } from './repositories/UserRepo'
import UserOtpRepo from './repositories/UserOtpRepo'
import { UserService } from './services/UserService'
import { UserController } from './controllers/UserController'

const userRepo = new UserRepo()
const userOtpRepo = new UserOtpRepo()
export const userService = new UserService(userRepo, userOtpRepo)
export const userController = new UserController(userService)
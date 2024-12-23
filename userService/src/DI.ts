import {UserRepo} from './repositories/implementations/userRepo'
import { UserService } from './services/UserService'
import { UserController } from './controllers/UserController'

const userRepo = new UserRepo()
export const userService = new UserService(userRepo)
export const userController  = new UserController(userService)
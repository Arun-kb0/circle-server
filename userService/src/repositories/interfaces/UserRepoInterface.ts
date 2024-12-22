import {IUser} from '../../model/UserModel'

export interface UserRepoInterface {
  getAll(): Promise<IUser[]>
  get(): Promise<IUser>
  update(): Promise<IUser>
}
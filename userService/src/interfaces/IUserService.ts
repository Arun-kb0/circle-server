import { IUser } from '../model/UserModel'

type FuncReturnType<T> = Promise<{
  err: null;
  data: T;
} | {
  err: number;
  data: null;
}>

interface IUserService {
  getAllUsers(page: number, startDate?: string, endDate?: string, searchText?: string): FuncReturnType<{ users: IUser[], numberOfPages: number, currentPage: number }>
  getUser(userId: string): FuncReturnType<IUser | null>
  updateUser(userId: string, user: Partial<IUser>): FuncReturnType<IUser>

  blockUser(userId: string): FuncReturnType<IUser>
  unBlockUser(userId: string): FuncReturnType<IUser>
}


export default IUserService

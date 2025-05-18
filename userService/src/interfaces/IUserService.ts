import IUser from './IUser'
import { FuncReturnType, PaginationBlockedUsers } from '../constants/svcTypes'
import { UsersCountType } from '../constants/types'
import IBlockUser, { IBlockUserExt } from './IBlockUser'


interface IUserService {
  getAllUsers(page: number, startDate?: string, endDate?: string, searchText?: string): FuncReturnType<{ users: IUser[], numberOfPages: number, currentPage: number }>
  getUser(userId: string): FuncReturnType<IUser | null>
  updateUser(userId: string, user: Partial<IUser>): FuncReturnType<IUser>

  blockUser(userId: string): FuncReturnType<IUser>
  unBlockUser(userId: string): FuncReturnType<IUser>

  getMultipleUsers(userIds: string[]): FuncReturnType<IUser[]>
  countUsers(startDate?: string, endDate?: string): FuncReturnType<UsersCountType>
  getUserCountByDateDetails(startDate: string, endDate: string): FuncReturnType<{ date: string, count: number }[]>


  getBlockedUsersByBlockerId(page: number, blockerUserId: string): FuncReturnType<PaginationBlockedUsers>
  getBlockedUserByBlockerAndBlockedId(blockerUserId: string, blockedUserId: string): FuncReturnType<IBlockUserExt | null>
  createBlockedUser(blockedUserId: string, blockerUserId: string): FuncReturnType<IBlockUserExt>
  deleteBlockedUser(blockedUserId: string, blockerUserId: string): FuncReturnType<IBlockUserExt | null>
}


export default IUserService

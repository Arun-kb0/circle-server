import { UsersCountType } from '../constants/types'
import IUser from '../interfaces/IUser'
import IBlockUser from './IBlockUser'

interface IUserRepo {
  countDocs(): Promise<number>
  findAll(limit: number, startIndex: number, startDate?: string, endDate?: string, searchText?: string): Promise<IUser[]>
  findById(userId: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findByName(name: string): Promise<IUser[] | null>
  getMultipleUsers(userIds: string[]): Promise<IUser[]>

  update(userId: string, user: Partial<IUser>): Promise<IUser | null>
  delete(userId: string): Promise<string>
  updateFollowCount(userId: string, isInc: boolean, field: 'followeeCount' | 'followerCount'): Promise<IUser | null>

  countUsers(startDate?: string, endDate?: string): Promise<UsersCountType>
  getUserCountByDateDetails(startDate: string, endDate: string): Promise<{ date: string, count: number }[]>

  getBlockedUsersByBlockerId(blockerUserId: string, limit: number, startIndex: number): Promise<IBlockUser[]> 
  getBlockedUsersByBlockerIdCount(blockerUserId: string): Promise<number> 
  getBlockedUserByBlockerAndBlockedId(blockerUserId: string, blockedUserId: string): Promise<IBlockUser | null>
  createBlockedUser(blockedUserId: string, blockerUserId: string): Promise<IBlockUser | null>
  deleteBlockedUser(blockedUserId: string, blockerUserId: string): Promise<IBlockUser | null>
}

export default IUserRepo
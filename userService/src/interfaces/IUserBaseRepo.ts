import IUser from './IUser'
import { UsersCountType } from '../constants/types'

interface IUserBaseRepo {
  countDocs(): Promise<number>
  findAll(limit: number, startIndex: number, startDate?: string, endDate?: string, searchText?: string): Promise<IUser[]>
  findById(userId: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findByName(name: string): Promise<IUser[] | null>
  getMultipleUsers(userIds: string[]): Promise<IUser[]>

  update(userId: string, user: Partial<IUser>): Promise<IUser | null>
  delete(userId: string): Promise<string>
  updateFollowCount(userId: string, isInc: boolean, field: 'followeeCount' | 'followerCount'): Promise<IUser | null>

  countUsersByDate(startDate?: string, endDate?: string): Promise<UsersCountType>
}

export default IUserBaseRepo
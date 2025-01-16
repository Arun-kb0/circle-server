import { ClientSession } from 'mongoose'
import { IUser } from '../model/UserModel'

interface IUserRepo {
  countDocs(): Promise<number>
  findAll(limit: number, startIndex: number, startDate?: Date, endDate?: Date, searchText?: string): Promise<IUser[]>
  findById(userId: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findByName(name: string): Promise<IUser | null>
  getMultipleUsers(userIds: string[]): Promise<IUser[]>

  update(userId: string, user: Partial<IUser>): Promise<IUser | null>
  delete(userId: string): Promise<string>
  updateFollowCount(userId: string, isInc: boolean, field: 'followeeCount' | 'followerCount'): Promise<IUser | null>

}

export default IUserRepo
import IUser from '../interfaces/IUser'
import IUserRepo from "../interfaces/IUserRepo";
import IUserBaseRepo from '../interfaces/IUserBaseRepo'
import handleError from '../util/handeError';
import { User } from '../proto/user/User';
import { UsersCountType } from '../constants/types';

export class UserRepo implements IUserRepo {

  constructor(
    private userBaseRepo: IUserBaseRepo
  ) { }

  async countUsers(startDate?: string, endDate?: string): Promise<UsersCountType> {
    try {
      const userCount = await this.userBaseRepo.countUsersByDate(startDate, endDate) 
      return userCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getMultipleUsers(userIds: string[]): Promise<IUser[]> {
    try {
      const users = await this.userBaseRepo.getMultipleUsers(userIds)
      return users
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async countDocs(): Promise<number> {
    try {
      const count = await this.userBaseRepo.countDocs()
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findAll(limit: number, startIndex: number, startDate: string, endDate: string, searchText: string): Promise<IUser[]> {
    try {
      const users = await this.userBaseRepo.findAll(limit, startIndex, startDate, endDate, searchText)
      return users
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  async findById(userId: string): Promise<IUser | null> {
    try {
      const user = await this.userBaseRepo.findById(userId)
      return user
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async update(userId: string, user: Partial<IUser>): Promise<IUser | null> {
    try {
      const updatedUser = await this.userBaseRepo.update(userId, user)
      return updatedUser
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async delete(userId: string): Promise<string> {
    try {
      const deletedUserId = await this.userBaseRepo.delete(userId)
      return deletedUserId
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await this.userBaseRepo.findByEmail(email)
      return user
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByName(name: string): Promise<IUser[] | null> {
    try {
      const users = await this.userBaseRepo.findByName(name)
      return users
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateFollowCount(userId: string, isInc: boolean, field: 'followeeCount' | 'followerCount'): Promise<IUser | null> {
    try {
      const user = await this.userBaseRepo.updateFollowCount(userId, isInc, field)
      return user
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}
import { Date } from "mongoose";
import IUser from "../../interfaces/IUser";
import IUserBaseRepo from "../../interfaces/IUserBaseRepo";
import { IUserDb, User } from "../../model/UserModel";
import { convertDbDateToIsoString, convertIUserDbToIUser, convertToObjectId, stringToDate } from '../../util/converter'
import handleError from "../../util/handeError";


class UserBaseRepo implements IUserBaseRepo {

  async getMultipleUsers(userIds: string[]): Promise<IUser[]> {
    try {
      const userObjIds = userIds.map(id => convertToObjectId(id))
      const users = await User.find({ _id: { $in: userObjIds } })
      const convertedUsers = users.map(user => convertIUserDbToIUser(user))
      return convertedUsers
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async countDocs(): Promise<number> {
    try {
      const count = await User.countDocuments()
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findAll(limit: number, startIndex: number, startDate?: string, endDate?: string, searchText?: string): Promise<IUser[]> {
    try {
      let res: IUserDb[]
      const query: {
        role: { $eq: 'user' | 'admin' },
        createdAt?: { $gte: Date; $lte: Date };
        $or?: { [key: string]: { $regex: string; $options: string } }[];
      } = {
        role: { $eq: 'user' }
      }

      if (startDate && endDate && (!searchText && searchText?.length === 0)) {
        query.createdAt = {
          $gte: stringToDate(startDate),
          $lte: stringToDate(startDate),
        }
        res = await User.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      } else if (searchText && searchText.length > 0 && (!startDate && !endDate)) {
        query.$or = [
          { name: { $regex: searchText, $options: "i" } },
          { email: { $regex: searchText, $options: "i" } },
        ];
        res = await User.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      } else if (startDate && endDate && searchText && searchText?.length === 0) {
        query.createdAt = {
          $gte: stringToDate(startDate),
          $lte: stringToDate(startDate),
        }
        query.$or = [
          { name: { $regex: searchText, $options: "i" } },
          { email: { $regex: searchText, $options: "i" } },
        ]
        res = await User.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      } else {
        res = await User.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      }
      const users = res.map(user => convertIUserDbToIUser(user))
      return users
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  async findById(userId: string): Promise<IUser | null> {
    try {
      const userObjId = convertToObjectId(userId)
      const user = await User.findById(userObjId)
      if (!user) return null
      return convertIUserDbToIUser(user)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async update(userId: string, user: Partial<IUser>): Promise<IUser | null> {
    try {
      const objId = convertToObjectId(userId)
      const updatedUser = await User.findOneAndUpdate(
        { _id: objId },
        { $set: { ...user } },
        { new: true }
      ).select('-password -refreshToken')
      if (!updatedUser) return null
      return convertIUserDbToIUser(updatedUser)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async delete(userId: string): Promise<string> {
    try {
      const userObjId = convertToObjectId(userId)
      await User.deleteOne({ _id: userObjId })
      return userId
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await User.findOne({ email: email })
        .select('-password')
      if (!user) return user
      return convertIUserDbToIUser(user)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByName(name: string): Promise<IUser[] | null> {
    try {
      const users = await User.find({ name: name })
        .select('-password')
      const convertedUsers = users.map(user => convertIUserDbToIUser(user))
      return convertedUsers
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateFollowCount(userId: string, isInc: boolean, field: 'followeeCount' | 'followerCount'): Promise<IUser | null> {
    try {
      const count = isInc ? 1 : -1
      const userObjId = convertToObjectId(userId)
      const user = await User.findOneAndUpdate(
        { _id: userObjId },
        { $inc: { [field]: count } },
        { new: true }
      )
      if (!user) return user
      return convertIUserDbToIUser(user)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default UserBaseRepo
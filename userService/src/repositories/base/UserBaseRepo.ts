import { Date, FilterQuery } from "mongoose";
import IUser from "../../interfaces/IUser";
import IUserBaseRepo from "../../interfaces/IUserBaseRepo";
import { IUserDb, User } from "../../model/UserModel";
import { convertIUserDbToIUser, convertIUserToIUserDb, convertToObjectId, stringToDate } from '../../util/converter'
import handleError from "../../util/handeError";
import { UsersCountType } from "../../constants/types";


class UserBaseRepo implements IUserBaseRepo {

  async countUsersByDate(startDate: string, endDate: string): Promise<UsersCountType> {
    try {
      const match: FilterQuery<IUserDb> = { role: 'user' };
      if (startDate) match.createdAt = { $gte: stringToDate(startDate) };
      if (endDate) match.createdAt = { ...match.createdAt, $lte: stringToDate(endDate) };
      const aggregation = [
        { $match: match },
        {
          $group: {
            _id: null,
            usersCount: { $sum: 1 },
            femaleUsersCount: { $sum: { $cond: [{ $eq: ["$gender", "female"] }, 1, 0] } },
            maleUsersCount: { $sum: { $cond: [{ $eq: ["$gender", "male"] }, 1, 0] } },
            otherUsersCount: { $sum: { $cond: [{ $and: [{ $ne: ["$gender", "female"] }, { $ne: ["$gender", "male"] }] }, 1, 0] } }
          }
        }
      ]

      const result = await User.aggregate(aggregation).exec();
      if (result.length === 0) {
        return {
          usersCount: 0,
          femaleUsersCount: 0,
          maleUsersCount: 0,
          otherUsersCount: 0
        }
      }

      const { usersCount, femaleUsersCount, maleUsersCount, otherUsersCount } = result[0];
      return {
        usersCount,
        femaleUsersCount,
        maleUsersCount,
        otherUsersCount
      }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

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
      if (startDate && endDate && (!searchText || searchText.length === 0)) {
        query.createdAt = {
          $gte: stringToDate(startDate),
          $lte: stringToDate(endDate),
        }
      } else if (searchText && searchText.length > 0 && (!startDate && !endDate)) {
        query.$or = [
          { name: { $regex: searchText, $options: "i" } },
          { email: { $regex: searchText, $options: "i" } },
        ]
      } else if (startDate && endDate && searchText && searchText.length > 0) {
        query.createdAt = {
          $gte: stringToDate(startDate),
          $lte: stringToDate(endDate),
        }
        query.$or = [
          { name: { $regex: searchText, $options: "i" } },
          { email: { $regex: searchText, $options: "i" } },
        ]
      }

      res = await User.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex);
      if (!res || res.length === 0) {
        console.warn("No users found for query:", query);
      }
      const users = res.map((user) => convertIUserDbToIUser(user));
      return users;

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
      const convertedUser = convertIUserToIUserDb(user)
      console.log(convertedUser, userId)
      const updatedUser = await User.findOneAndUpdate(
        { _id: objId },
        { $set: { ...convertedUser } },
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
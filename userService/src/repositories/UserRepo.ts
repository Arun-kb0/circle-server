import { ClientSession, Types, } from "mongoose";
import { IUser, User } from "../model/UserModel";
import IUserRepo from "../interfaces/IUserRepo";


export class UserRepo implements IUserRepo {


  async getMultipleUsers(userIds: string[]): Promise<IUser[]> {
    const users = await User.find({ _id: { $in: userIds } })
    return users
  }

  async countDocs(): Promise<number> {
    const count = await User.countDocuments()
    return count
  }

  async findAll(limit: number, startIndex: number, startDate: Date, endDate: Date, searchText: string): Promise<IUser[]> {
    let res: IUser[]
    const query: {
      role: { $eq: 'user' | 'admin' },
      createdAt: { $gte: Date; $lte: Date };
      $or?: { [key: string]: { $regex: string; $options: string } }[];
    } = {
      role: { $eq: 'user' },
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    };
    if (!startDate && !endDate) {
      res = await User.find({ role: 'user' }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    } else if (searchText && searchText.length > 0) {
      query.$or = [
        { name: { $regex: searchText, $options: "i" } },
        { email: { $regex: searchText, $options: "i" } },
      ];
      res = await User.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    } else {
      res = await User.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
    }

    const users = res.map(user => user.toObject())
    return users
  }


  async findById(userId: string): Promise<IUser | null> {
    const user = await User.findById(userId)
    return user ? user.toObject() : null
  }

  async update(userId: string, user: Partial<IUser>): Promise<IUser | null> {
    if (!userId || !Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid or empty userId');
    }
    console.log(user)
    
    const objId = Types.ObjectId.createFromHexString(userId)
    const updatedUser = await User.findOneAndUpdate(
      { _id: objId },
      { $set: { ...user } },
      { new: true }
    ).select('-password -refreshToken')
    return updatedUser ? updatedUser.toObject() : null
  }

  async delete(userId: string): Promise<string> {
    await User.deleteOne({ _id: userId })
    return userId
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email: email })
      .select('-password')
    return user
  }

  async findByName(name: string): Promise<IUser | null> {
    const user = await User.findOne({ name: name })
      .select('-password')
    return user
  }

  async updateFollowCount(userId: string, isInc: boolean, field: 'followeeCount' | 'followerCount'): Promise<IUser | null> {
    const count = isInc ? 1 : -1
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { [field]: count } },
      { new: true }
    )
    return user ? user.toObject() : null
  }
}
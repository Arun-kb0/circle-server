import { Types, } from "mongoose";
import { IUser, User } from "../model/UserModel";
import IUserRepo from "../interfaces/IUserRepo";


export class UserRepo implements IUserRepo {
  
  async countDocs(): Promise<number> {
    const count = await User.countDocuments()
    return count
  }

  async findAll(limit: number, startIndex: number): Promise<IUser[]> {
    const res = await User.find().sort().limit(limit).skip(startIndex)
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

}
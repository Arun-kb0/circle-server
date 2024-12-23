import { IUser, User } from "../../model/UserModel";
import { UserRepoInterface } from "../interfaces/UserRepoInterface";


export class UserRepo implements UserRepoInterface {

  async findAll(): Promise<IUser[]> {
    const users = await User.find()
    return users
  }

  async findById(userId: string): Promise<IUser | null> {
    const user = await User.findById(userId)
    return user ? user.toObject() : null
  }

  async update(userId: string, user: Partial<IUser>): Promise<IUser | null> {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { ...user } },
      { new: true }
    ).select('-password -refreshToken')
      .exec()

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
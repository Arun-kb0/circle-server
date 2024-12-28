import { IUser, User } from "../model/UserModel";
import IUserRepo from "../interfaces/IUserRepo";



export class UserRepo implements IUserRepo {

  async findByEmailAndUpdate(email: string, user: Partial<IUser>): Promise<IUser | null> {
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { $set: user },
      { new: true }
    )
    return updatedUser ? updatedUser.toObject() : null
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const foundUser = await User.findOne({ email: email })
    return foundUser ? foundUser.toObject() : null
  }

  async findByEmailAndStatus(email: string, status: 'blocked' | 'deleted' | 'active'): Promise<IUser | null> {
    const foundUser = await User.findOne({ email, status })
    return foundUser ? foundUser.toObject() : null
  }

  async create(user: IUser): Promise<IUser> {
    const newUser = await User.create(user)
    return newUser
  }

  async findById(id: string): Promise<IUser | null> {
    const foundUser = await User.findOne({ _id: id })
    return foundUser ? foundUser.toObject() : null
  }

  async update(id: string, user: Partial<IUser>): Promise<IUser | null> {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: user },
      { new: true }
    )
    return updatedUser ? updatedUser.toObject() : null
  }


  async findByToken(refreshToken: string): Promise<IUser | null> {
    const user = await User.findOne({ refreshToken })
    return user ? user.toObject() : null
  }

}
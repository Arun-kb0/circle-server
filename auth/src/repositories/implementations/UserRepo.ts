import { IUser, User } from "../../model/UserModel";
import { UserRepoInterface } from "../interfaces/UserRepoInterface";



export class UserRepo implements UserRepoInterface {

  async findByEmail(email: string): Promise<IUser | null> {
    const foundUser = await User.findOne({ email: email })
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


  findAll(): Promise<IUser[]> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}
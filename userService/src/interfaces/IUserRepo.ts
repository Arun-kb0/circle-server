import { IUser } from '../model/UserModel'

interface IUserRepo {
  countDocs(): Promise<number>
  findAll(limit:number, startIndex:number): Promise<IUser[]>
  findById(userId: string): Promise<IUser | null>
  update(userId: string, user: Partial<IUser>): Promise<IUser | null>
  delete(userId: string): Promise<string>
  findByEmail(email: string): Promise<IUser | null>
  findByName(name: string): Promise<IUser | null>
}

export default IUserRepo
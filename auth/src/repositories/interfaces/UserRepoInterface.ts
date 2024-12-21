import { IUser } from '../../model/UserModel'

export interface UserRepoInterface {
  create(user: IUser): Promise<IUser>
  findById(id: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findAll(): Promise<IUser[]>
  update(id: string, user: Partial<IUser>): Promise<IUser | null>
  delete(id: string): Promise<boolean>
}


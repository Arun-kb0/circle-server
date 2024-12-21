import { IUser } from '../../model/UserModel'


type CreateUserArg = Pick<
  IUser, 'email' | 'name' | 'password'>
  & Partial<Omit<IUser, '_id' | 'followeeCount' | 'followerCount' | 'email' | 'name' | 'password'>
  >

export interface UserRepoInterface {
  create(user: CreateUserArg): Promise<IUser>
  findById(id: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findByToken(refreshToken:string): Promise<IUser | null>
  update(id: string, user: Partial<IUser>): Promise<IUser | null>
}


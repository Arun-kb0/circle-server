import { IUser } from '../model/UserModel'


type CreateUserArg = Pick<
  IUser, 'email' | 'name' | 'password'>
  & Partial<Omit<IUser, '_id' | 'followeeCount' | 'followerCount' | 'email' | 'name' | 'password'>
  >

type CreateForOAuthArgs = Pick<
  IUser, 'email' | 'name' | 'provider' | 'role'>
  & Partial<Omit<IUser, '_id' | 'followeeCount' | 'followerCount' | 'email' | 'name' | 'password'>
  >


interface IUserRepo {
  create(user: CreateUserArg): Promise<IUser>
  createForOAuth(user: CreateForOAuthArgs): Promise<IUser>
  findById(id: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findByEmailAndStatus(email: string, status: 'blocked' | 'deleted' | 'active'): Promise<IUser | null>
  findByToken(refreshToken: string): Promise<IUser | null>
  update(id: string, user: Partial<IUser>): Promise<IUser | null>
  findByEmailAndUpdate(email: string, user: Partial<IUser>): Promise<IUser | null>
}

export default IUserRepo
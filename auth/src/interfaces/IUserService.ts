import { IUser } from '../model/UserModel'

export type SvcFuncReturnType<T> = Promise<{
  err: number | null;
  data: T | null;
}>


export type UserAuthInfo = {
  user: Partial<IUser> | null;
  token: string;
  refreshToken: string;
}

interface IUserService {

  jwtVerify(token: string): SvcFuncReturnType<string>

  signup(name: string, email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  login(email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  logout(token: string): SvcFuncReturnType<{ status: string }>
  refresh(refreshToken: string): SvcFuncReturnType<{ user: IUser, accessToken: string }>

  adminSignup(name: string, email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  adminLogin(email: string, password: string): SvcFuncReturnType<UserAuthInfo>
}

export default IUserService
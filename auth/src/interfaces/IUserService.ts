import { IUser } from '../model/UserModel'
import { IUserOtp } from '../model/UserOtpModel';

export type SvcFuncReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>


export type UserAuthInfo = {
  user: Partial<IUser> | null;
  token: string;
  refreshToken: string;
}


interface IUserService {

  signup(name: string, email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  login(email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  logout(token: string): SvcFuncReturnType<{ status: string }>
  refresh(refreshToken: string): SvcFuncReturnType<{ user: IUser, accessToken: string }>
  sendOtp(otpData: Partial<IUserOtp>, isPassword: boolean): SvcFuncReturnType<{ _id: string, email: string }>
  
  adminSignup(name: string, email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  adminLogin(email: string, password: string): SvcFuncReturnType<UserAuthInfo>
}

export default IUserService
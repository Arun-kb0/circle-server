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

  login(email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  logout(token: string): SvcFuncReturnType<{ status: string }>
  refresh(refreshToken: string): SvcFuncReturnType<{ user: IUser, accessToken: string }>

  signup(name: string, email: string, password: string): SvcFuncReturnType<{ email: string, status: string }>
  sendOtp(otpData: Partial<IUserOtp>, isPassword: boolean): SvcFuncReturnType<IUserOtp>
  resendOtp(email: string, otpId: string , isPassword?:boolean): SvcFuncReturnType<IUserOtp>
  verifyOtp(email: string, otp: number, otpId: string): SvcFuncReturnType<{ user: IUser, accessToken: string, refreshToken: string }>
  resetPassword(email: string, password: string): SvcFuncReturnType<{ email: string, otpId: string }>
  resetPwdVerifyOtp(email: string, otp: number, otpId: string): SvcFuncReturnType<{ status:string, email: string }>

  adminSignup(name: string, email: string, password: string): SvcFuncReturnType<UserAuthInfo>
  adminLogin(email: string, password: string): SvcFuncReturnType<UserAuthInfo>
}

export default IUserService
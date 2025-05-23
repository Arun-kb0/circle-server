import { IUserOtp } from "../model/UserOtpModel"

interface IUserOtpRepo {
  create(otpData: Partial<IUserOtp>): Promise<IUserOtp | null>
  update(email: string, otpData: Partial<IUserOtp>): Promise<IUserOtp | null>
  findByEmail(email: string): Promise<IUserOtp | null>
  findById(otpId: string): Promise<IUserOtp | null>
  delete(email: string): Promise<IUserOtp | null>
}

export default IUserOtpRepo
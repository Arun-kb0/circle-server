import IUserOtpRepo from "../interfaces/IUserOtpRepo";
import { IUserOtp, UserOtp } from '../model/UserOtpModel'

class UserOtpRepo implements IUserOtpRepo {

  async update(email: string, otpData: Partial<IUserOtp>): Promise<IUserOtp | null> {
    const updatedOtpData = await UserOtp.findOneAndUpdate(
      { email: email },
      { $set: otpData },
      { new: true }
    )
    return updatedOtpData ? updatedOtpData.toObject() : null
  }

  async delete(email: string): Promise<IUserOtp | null> {
    const deletedOtpData = await UserOtp.findOneAndDelete({ email: email })
    return deletedOtpData ? deletedOtpData.toObject() : null
  }

  async find(email: string): Promise<IUserOtp | null> {
    const foundOtpData = await UserOtp.findOne({ email: email })
    return foundOtpData ? foundOtpData.toObject() : null
  }

  async create(otpData: Omit<IUserOtp, '_id' | 'updateAt' | 'createdAt'>): Promise<IUserOtp | null> {
    const newOtpData = await UserOtp.create(otpData)
    return newOtpData
  }

}

export default UserOtpRepo
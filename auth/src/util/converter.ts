import { Schema } from "mongoose"
import { IUser } from "../model/UserModel"
import { User } from "../proto/authType/User"
import { IUserOtp } from "../model/UserOtpModel"


export const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

export const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertUserForGrpc = (user: Partial<IUser>) => {
  const {
    _id, name, email, age, location, state, gender,
    followeeCount, followerCount, createdAt, updatedAt,
    status, isVerified, role, isOnline, image
  } = user
  const convertedUser: User = {
    _id, name, email, age, location, state, gender,
    followeeCount, followerCount,
    status, isVerified, role, isOnline, image,
    createdAt: dateToString(createdAt),
    updatedAt: dateToString(updatedAt),
  }
  return convertedUser
}

export const convertUserForDb = (user: User): Partial<IUser> => {
  const { createdAt, updatedAt, image, role, status, _id, ...rest } = user
  const convertedUser: Partial<IUser> = {
    ...rest,
    role: role as "user" | "admin" | undefined,
    status: status as "active" | "blocked" | "deleted" | undefined,
    image: {
      url: image?.url,
      name: image?.name,
    },
    createdAt: stringToDate(createdAt as string),
    updatedAt: stringToDate(updatedAt as string)
  }
  return convertedUser
}

const convertUserOtpForGrpc = (otpData: IUserOtp) => {

}
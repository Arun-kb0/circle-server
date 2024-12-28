import { Schema } from "mongoose"
import { IUser } from "../model/UserModel"
import { User } from "../proto/authType/User"


export const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

export const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertUserForGrpc = (user: Partial<IUser>) => {
  const { createdAt, updatedAt, password, refreshToken, ...rest } = user
  const convertedUser: User = {
    ...rest,
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


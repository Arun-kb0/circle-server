import { Schema, Types, Date as DbDate } from "mongoose"
import IUser from "../interfaces/IUser"
import { User } from "../proto/user/User"
import { IUserDb } from "../model/UserModel"
import IFollow from "../interfaces/IFollow"
import { IFollowDb } from "../model/followModel"


export const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

export const stringToDate = (str: string):DbDate => {
  return new Date(str) as unknown as DbDate
}

export const convertToObjectId = (id: string): Types.ObjectId | null => {
  return Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : null
}

export const convertDbDateToIsoString = (dbDate: DbDate): string => {
  return new Date(dbDate.toString()).toISOString()
}

export const convertUserForGrpc = (user: Partial<IUser>) => {
  const {
    _id, name, email, age, location, state, status,
    gender, followeeCount, followerCount, role, isOnline, image,
    createdAt, updatedAt, password, refreshToken
  } = user
  const convertedUser: User = {
    _id, name, email, age, location, state, status,
    gender, followeeCount, followerCount, role,
    isOnline, image, createdAt, updatedAt
  }
  return convertedUser
}


export const convertGrpcUserForUpdate = (user: User): Partial<IUser> => {
  const { createdAt, updatedAt, image, role, status, _id, ...rest } = user
  const convertedUser: Partial<IUser> = {
    ...rest,
    role: role as "user" | "admin" | undefined,
    status: status as "active" | "blocked" | "deleted" | undefined,
    image: {
      url: image?.url,
      name: image?.name,
    }
  }

  const sanitizedUser = Object.fromEntries(
    Object.entries(convertedUser).filter(([_, value]) => value)
  )
  return sanitizedUser
}


// * user
export const convertIUserToIUserDb = (user: Partial<IUser>): Partial<IUserDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const userDb: Partial<IUserDb> = {}
  Object.keys(user).forEach((key) => {
    const typedKey = key as keyof IUser;
    if (user[typedKey] && conversionMap[typedKey]) {
      userDb[typedKey] = conversionMap[typedKey](user[typedKey])
    } else if (user[typedKey]) {
      userDb[typedKey as keyof IUserDb] = user[typedKey];
    }
  })

  return userDb
}

export const convertIUserDbToIUser = (user: IUserDb): IUser => {
  return {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    password: user.password,
    age: user.age,
    location: user.location,
    state: user.state,
    gender: user.gender,
    followeeCount: user.followeeCount,
    followerCount: user.followerCount,
    refreshToken: user.refreshToken,
    role: user.role,
    status: user.status,
    isOnline: user.isOnline,
    image: {
      url: user.image?.url,
      name: user.image?.name,
    },
    createdAt: convertDbDateToIsoString(user.createdAt),
    updatedAt: convertDbDateToIsoString(user.updatedAt),
  }
}

// * follow
export const convertIFollowToIFollowDb = (follow: Partial<IFollow>): Partial<IFollowDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    userId: convertToObjectId,
    targetUserId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const followDb: Partial<IFollowDb> = {}
  Object.keys(follow).forEach((key) => {
    const typedKey = key as keyof IFollow;
    if (follow[typedKey] && conversionMap[typedKey]) {
      followDb[typedKey] = conversionMap[typedKey](follow[typedKey])
    } else if (follow[typedKey]) {
      followDb[typedKey as keyof IFollowDb] = follow[typedKey];
    }
  })

  return followDb
}

export const convertIFollowDbToIFollow = (follow: IFollowDb): IFollow => {
  return {
    _id: follow._id.toString(),
    userId: follow.userId.toString(),
    targetUserId: follow.targetUserId.toString(),
    createdAt: convertDbDateToIsoString(follow.createdAt),
    updatedAt: convertDbDateToIsoString(follow.updatedAt)
  }
}
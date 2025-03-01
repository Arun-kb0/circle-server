import { Date as DbDate, Schema, Types } from "mongoose"
import { INotification } from "../interfaces/INotification"
import { INotificationDb } from "../model/notificationModel"

export const dateToString = (date: Schema.Types.Date | undefined) => {
  return date ? date.toString() : ''
}

export const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertToObjectId = (id: string): Types.ObjectId | null => {
  return Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : null
}

const convertDbDateToIsoString = (dbDate: DbDate): string => {
  return new Date(dbDate.toString()).toISOString()
}

export const convertINotificationDbToINotification = (notification: INotificationDb): INotification => {
  return {
    _id: notification._id.toString(),
    authorId: notification.authorId.toString(),
    receiverId: notification.authorId.toString(),
    type: notification.type as INotification['type'],
    message: notification.message,
    read: notification.read,
    updatedAt: convertDbDateToIsoString(notification.createdAt),
    createdAt: convertDbDateToIsoString(notification.updatedAt),
  }
}

export const convertINotificationToINotificationDb = (notification: Partial<INotification>): Partial<INotificationDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    authorId: convertToObjectId,
    receiverId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const notificationDb: Partial<INotificationDb> = {}
  Object.keys(notification).forEach((key) => {
    const typedKey = key as keyof INotification;
    if (notification[typedKey] && conversionMap[typedKey]) {
      notificationDb[typedKey] = conversionMap[typedKey](notification[typedKey])
    } else if (notification[typedKey]) {
      notificationDb[typedKey as keyof INotification] = notification[typedKey] as any;
    }
  })
  return notificationDb 
}

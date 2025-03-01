import UserGrpcClient from '../config/UserGrpcClient'
import { User } from '../proto/userProto/user/User'
import { INotification, INotificationExt } from '../interfaces/INotification'

const client = UserGrpcClient.getClient()

const getMultipleUsers = async (userIds: string[]) => {
  try {
    const users: User[] = await new Promise((resolve, reject) => {
      client.getMultipleUser({ userIds }, (err, msg) => {
        if (err) return reject(new Error(err.message));
        if (!msg || !msg?.users) return reject(new Error('getMultipleUser response is empty.'));
        resolve(msg.users);
      });
    })
    return users
  } catch (error) {
    console.warn('getMultipleUsers failed')
    console.log(error)
    return []
  }
}

export const addUserToNotifications = async (notifications: INotification[]): Promise<INotificationExt[]> => {
  try {
    const userIds = notifications.map(item => item.authorId)
    const users = await getMultipleUsers(userIds)
    const notificationWithUsers = notifications.map((item) => {
      const user = users.find((user) => user._id === item.authorId);
      return {
        ...item,
        authorName: user?.name || '',
        authorImage: user?.image?.url || '',
      }
    })
    return notificationWithUsers
  } catch (error) {
    console.log('users and notification merging failed')
    console.log(error)
    return []
  }
}
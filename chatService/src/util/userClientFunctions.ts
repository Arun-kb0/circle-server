import UserGrpcClient from '../config/UserGrpcClient'
import { User } from '../proto/userProto/user/User'
import IMessage, { IMessageExt } from '../interfaces/IMessage'

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

const getUser = async (userId: string) => {
  try {
    const user: User = await new Promise((resolve, reject) => {
      client.getUser({ userId }, (err, msg) => {
        if (err) return reject(new Error(err.message));
        if (!msg || !msg?.user) return reject(new Error('getMultipleUser response is empty.'));
        resolve(msg.user as User);
      })
    })
    return user
  } catch (error) {
    console.warn('getUser failed')
    console.log(error)
    return undefined
  }
}


export const addUserToMessage = async (message: IMessage): Promise<IMessageExt> => {
  try {
    const user = await getUser(message.authorId)
    return {
      ...message,
      authorName: user?.name || undefined,
      authorImage: user?.image?.url || undefined,
    }
  } catch (error) {
    console.log('users and posts merging failed')
    console.log(error)
    return message
  }
}

export const addUsersToMessages = async (messages: IMessage[]): Promise<IMessageExt[]> => {
  try {
    const userIds = messages.map(msg => msg.authorId)
    const users = await getMultipleUsers(userIds)
    const msgWithUsers = messages.map((msg): IMessageExt => {
      const user = users.find((user) => user._id === msg.authorId);
      return {
        ...msg,
        authorName: user?.name || undefined,
        authorImage: user?.image?.url || undefined,
      }
    })
    return msgWithUsers
  } catch (error) {
    console.log('users and posts merging failed')
    console.log(error)
    return []
  }
}
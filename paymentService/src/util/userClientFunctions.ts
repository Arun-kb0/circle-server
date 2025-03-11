import UserGrpcClient from '../config/UserGrpcClient'
import { User } from '../proto/userProto/user/User'
import ITransaction, { ITransactionExt } from '../interfaces/ITransaction'
import ISubscription, { ISubscriptionsExt } from '../interfaces/ISubscription'

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


export const addUserToTransaction = async (transaction: ITransaction): Promise<ITransactionExt> => {
  try {
    const user = await getUser(transaction.senderId)
    return {
      ...transaction,
      userName: user?.name || undefined,
      userImage: user?.image?.url || undefined,
    }
  } catch (error) {
    console.log('users and posts merging failed')
    console.log(error)
    return transaction
  }
}

export const addUsersToTransactions = async (transactions: ITransaction[]): Promise<ITransactionExt[]> => {
  try {
    const userIds = transactions.map(msg => msg.senderId)
    const users = await getMultipleUsers(userIds)
    const transactionsWithUser = transactions.map((transaction): ITransactionExt => {
      const user = users.find((item) => item._id === transaction.senderId);
      return {
        ...transaction,
        userName: user?.name || undefined,
        userImage: user?.image?.url || undefined,
      }
    })
    return transactionsWithUser
  } catch (error) {
    console.log('users and posts merging failed')
    console.log(error)
    return []
  }
}

// * admin
// * subscriptions 
export const addUsersToSubscriptions = async (subscriptions: ISubscription[]): Promise<ISubscriptionsExt[]> => {
  try {
    const subsUserIds = subscriptions.map(item => item.subscriberUserId)
    const subsToUserIds = subscriptions.map(item => item.subscriberToUserId)
    const users = await getMultipleUsers([...subsToUserIds, ...subsUserIds])
    const subscriptionsWithUser = subscriptions.map((subscription): ISubscriptionsExt => {
      const subscriberUser = users.find((user) => user._id === subscription.subscriberUserId);
      const subscriberToUser = users.find((user) => user._id === subscription.subscriberToUserId);
      return {
        ...subscription,
        subscriberUserName: subscriberUser?.name || undefined,
        subscriberUserImage: subscriberUser?.image?.url || undefined,
        subscriberToUserName: subscriberToUser?.name || undefined,
        subscriberToUserImage: subscriberToUser?.image?.url || undefined,
      }
    })
    return subscriptionsWithUser
  } catch (error) {
    console.log('users and subscriptions merging failed')
    console.log(error)
    return []
  }
}
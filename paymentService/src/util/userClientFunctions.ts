import UserGrpcClient from '../config/UserGrpcClient'
import { User } from '../proto/userProto/user/User'
import ITransaction, { ITransactionAdmin, ITransactionExt } from '../interfaces/ITransaction'
import ISubscription, { ISubscriptionsExt } from '../interfaces/ISubscription'
import { UserSubscriptionPlan } from '../model/userSubscriptionPlanModel'

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
// ! fix
export const addUsersToTransactions = async (transactions: ITransaction[]): Promise<ITransactionExt[]> => {
  try {
    // const userIds = transactions.map(msg => msg.senderId)
    const userIds = transactions.map(item => item.userId === item.senderId ? item.receiverId : item.senderId)
    const users = await getMultipleUsers(userIds)
    console.log("users from addUsersToTransactions ")
    console.log(users)
    const transactionsWithUser = transactions.map((transaction): ITransactionExt => {
      const user = users.find((item) => item._id === transaction.senderId || item._id === transaction.receiverId);
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

// * admin
// * subscriptions 
export const addSenderAndReceiverDataToTransactions = async (transactions: ITransaction[]): Promise<ITransactionAdmin[]> => {
  try {
    const senderIds = transactions.map(item => item.senderId)
    const receiverIds = transactions.map(item => item.receiverId)
    const users = await getMultipleUsers([...receiverIds, ...senderIds])
    const transactionsWithUser = transactions.map((transaction): ITransactionAdmin => {
      const senderUser = users.find((user) => user._id === transaction.senderId);
      const receiverUser = users.find((user) => user._id === transaction.receiverId);
      return {
        ...transaction,
        senderName: senderUser?.name || undefined,
        senderImage: senderUser?.image?.url || undefined,
        senderEmail: senderUser?.image?.url || undefined,
        receiverName: receiverUser?.name || undefined,
        receiverImage: receiverUser?.image?.url || undefined,
        receiverEmail: receiverUser?.image?.url || undefined,
      }
    })
    return transactionsWithUser
  } catch (error) {
    console.log('users and subscriptions merging failed')
    console.log(error)
    return []
  }
}
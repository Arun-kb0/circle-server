import ISubscription from '../../interfaces/ISubscription'
import ISubscriptionBaseRepo from '../../interfaces/ISubscriptionBaseRepo'
import { Subscription } from '../../model/subscriptionModel'
import { convertISubscriptionDbToISubscription, convertISubscriptionToISubscriptionDb, convertToObjectId } from '../../util/converter'
import handleError from '../../util/handleError'

class SubscriptionBaseRepo implements ISubscriptionBaseRepo {


  async findSubsByMerchantTransactionIdAndUpdate(merchantTransactionId: string, subscription: Partial<ISubscription>): Promise<ISubscription | null> {
    try {
      const convertedSub = convertISubscriptionToISubscriptionDb(subscription)
      const updatedSub = await Subscription.findOneAndUpdate(
        { merchantTransactionId },
        { $set: convertedSub },
        { new: true }
      )
      if (!updatedSub) return null
      return convertISubscriptionDbToISubscription(updatedSub)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  async findSubscriptionsByUserId(userId: string, limit: number, startIndex: number): Promise<ISubscription[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const subscriptions = await Subscription.find({ subscriberUserId: userObjId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      const convertedSubscriptions = subscriptions.map(item => convertISubscriptionDbToISubscription(item))
      return convertedSubscriptions
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  async findSubscriptionsByUserIdCount(userId: string): Promise<number> {
    try {
      const userObjId = convertToObjectId(userId)
      const count = await Subscription.countDocuments({ subscriberUserId: userObjId })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createSubscription(subscriptionData: Partial<ISubscription>): Promise<ISubscription> {
    try {
      const convertedData = convertISubscriptionToISubscriptionDb(subscriptionData)
      const newData = await Subscription.create(convertedData)
      return convertISubscriptionDbToISubscription(newData)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateSubscription(subscriptionId: string, subscriptionData: Partial<ISubscription>): Promise<ISubscription | null> {
    try {
      const subsObjId = convertToObjectId(subscriptionId)
      const convertedData = convertISubscriptionToISubscriptionDb(subscriptionData)
      const updatedData = await Subscription.findByIdAndUpdate(subsObjId, convertedData, { new: true })
      return updatedData ? convertISubscriptionDbToISubscription(updatedData) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findSubscriptionById(subscriptionId: string): Promise<ISubscription | null> {
    try {
      const subsObjId = convertToObjectId(subscriptionId)
      const subscriptionData = await Subscription.findById(subsObjId)
      return subscriptionData ? convertISubscriptionDbToISubscription(subscriptionData) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByIdAndDelete(subscriptionId: string): Promise<ISubscription | null> {
    try {
      const subsObjId = convertToObjectId(subscriptionId)
      const deletedData = await Subscription.findByIdAndDelete(subsObjId)
      return deletedData ? convertISubscriptionDbToISubscription(deletedData) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default SubscriptionBaseRepo
import ISubscription from '../../interfaces/ISubscription'
import ISubscriptionBaseRepo from '../../interfaces/ISubscriptionBaseRepo'
import { Subscription } from '../../model/subscriptionModel'
import { convertISubscriptionDbToISubscription, convertISubscriptionToISubscriptionDb, convertToObjectId } from '../../util/converter'
import handleError from '../../util/handleError'

class SubscriptionBaseRepo implements ISubscriptionBaseRepo {

  async findSubscriptionsByUserId(userId: string): Promise<ISubscription[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const subscriptions = await Subscription.find({ subscriberUserId: userObjId })
      if (!subscriptions) return []
      const convertedSubscriptions = subscriptions.map(item => convertISubscriptionDbToISubscription(item))
      return convertedSubscriptions
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
import IUserSubscriptionPlan from "../../interfaces/IUserSubscriptionPlan";
import IUserSubscriptionPlanBaseRepo from "../../interfaces/IUserSubscriptionPlanBaseRepo";
import { UserSubscriptionPlan } from "../../model/userSubscriptionPlanModel";
import {
  convertIUserSubscriptionPlanDbToIUserSubscriptionPlan,
  convertIUserSubscriptionPlanToIUserSubscriptionPlanDb, convertToObjectId
} from '../../util/converter'
import handleError from '../../util/handleError'

class UserSubscriptionPlanBaseRepo implements IUserSubscriptionPlanBaseRepo {

  async doesPlanExits(userId: string): Promise<boolean> {
    try {
      const userObjId = convertToObjectId(userId)
      const foundPlanId = await UserSubscriptionPlan.exists({ userId: userObjId })
      return foundPlanId ? true : false
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByUserIdAndUpdatePlan(userId: string, plan: Partial<IUserSubscriptionPlan>): Promise<IUserSubscriptionPlan | null> {
    try {
      const convertedData = convertIUserSubscriptionPlanToIUserSubscriptionPlanDb(plan)
      const userObjId = convertToObjectId(userId)
      const updatedPlan = await UserSubscriptionPlan.findOneAndUpdate(
        { userId: userObjId },
        { $set: convertedData },
        { new: true }
      )
      return updatedPlan ? convertIUserSubscriptionPlanDbToIUserSubscriptionPlan(updatedPlan) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createPlan(plan: Partial<IUserSubscriptionPlan>): Promise<IUserSubscriptionPlan> {
    try {
      const convertedData = convertIUserSubscriptionPlanToIUserSubscriptionPlanDb(plan)
      const newPlan = await UserSubscriptionPlan.create(convertedData)
      return convertIUserSubscriptionPlanDbToIUserSubscriptionPlan(newPlan)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPlanByUserId(userId: string): Promise<IUserSubscriptionPlan | null> {
    try {
      const userObjId = convertToObjectId(userId)
      const foundPlan = await UserSubscriptionPlan.findOne({ userId: userObjId })
      return foundPlan ? convertIUserSubscriptionPlanDbToIUserSubscriptionPlan(foundPlan) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default UserSubscriptionPlanBaseRepo
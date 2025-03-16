import IUserSubscriptionPlan from "./IUserSubscriptionPlan";

interface IUserSubscriptionPlanBaseRepo {
  createPlan(plan: Partial<IUserSubscriptionPlan>): Promise<IUserSubscriptionPlan>
  findPlanByUserId(userId: string): Promise<IUserSubscriptionPlan | null>
  findByUserIdAndUpdatePlan(userId: string, plan: Partial<IUserSubscriptionPlan>): Promise<IUserSubscriptionPlan | null>
  doesPlanExits(userId: string): Promise<boolean>
}

export default IUserSubscriptionPlanBaseRepo
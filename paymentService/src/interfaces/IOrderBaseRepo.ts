import IOrder from './IOrder'

interface IOrderBaseRepo {
  createOrder(order: Partial<IOrder>): Promise<IOrder>
  findByOrderIdAndUpdate(orderId: string, order: Partial<IOrder>): Promise<IOrder>
  findOrderByOrderId(orderId: string): Promise<IOrder | null>
  findByOrderIdAndDelete(orderId: string): Promise<IOrder | null>
  findOrderByMerchantTransactionId(merchantTransactionId: string): Promise<IOrder | null>
}

export default IOrderBaseRepo
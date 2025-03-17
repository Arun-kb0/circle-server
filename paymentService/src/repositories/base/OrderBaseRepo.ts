import IOrder from "../../interfaces/IOrder";
import IOrderBaseRepo from "../../interfaces/IOrderBaseRepo";
import { Order } from '../../model/orderModel'
import { convertIOrderDbToIOrder, convertIOrderToIOrderDb, convertToObjectId } from "../../util/converter";
import handleError from '../../util/handleError'

class OrderBaseRepo implements IOrderBaseRepo {

  async findOrderByMerchantTransactionId(merchantTransactionId: string): Promise<IOrder | null> {
    try {
      const order = await Order.findOne({ merchantTransactionId })
      return order ? convertIOrderDbToIOrder(order) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createOrder(order: Partial<IOrder>): Promise<IOrder> {
    try {
      const convertedOrder = convertIOrderToIOrderDb(order)
      const newOrder = await Order.create(convertedOrder)
      return convertIOrderDbToIOrder(newOrder)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByOrderIdAndUpdate(orderId: string, order: Partial<IOrder>): Promise<IOrder> {
    try {
      const convertedOrder = convertIOrderToIOrderDb(order)
      const updatedOrder = await Order.findOneAndUpdate(
        { orderId },
        { $set: convertedOrder },
        { new: true }
      )
      if (!updatedOrder) {
        throw new Error('Order not found')
      }
      return convertIOrderDbToIOrder(updatedOrder)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findOrderByOrderId(orderId: string): Promise<IOrder | null> {
    try {
      const orderObjId = convertToObjectId(orderId)
      const order = await Order.findOne({ orderId: orderObjId })
      return order ? convertIOrderDbToIOrder(order) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByOrderIdAndDelete(orderId: string): Promise<IOrder | null> {
    try {
      const orderObjId = convertToObjectId(orderId)
      const order = await Order.findOneAndDelete({ orderId: orderObjId })
      return order ? convertIOrderDbToIOrder(order) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}


export default OrderBaseRepo
import IPayment from "../../interfaces/IPayment";
import IPaymentBaseRepo from "../../interfaces/IPaymentBaseRepo";
import { convertIPaymentDbToIPayment, convertIPaymentToIPaymentDb } from "../../util/converter";
import handleError from "../../util/handleError";
import { Payment } from "../../model/paymentModel";

class PaymentBaseRepo implements IPaymentBaseRepo {

  async createPayment(paymentData: Partial<IPayment>): Promise<IPayment> {
    try {
      const convertedData = convertIPaymentToIPaymentDb(paymentData)
      const newPayment = await Payment.create(convertedData)
      return convertIPaymentDbToIPayment(newPayment)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updatePayment(paymentId: string, paymentData: Partial<IPayment>): Promise<IPayment | null> {
    try {
      const convertedData = convertIPaymentToIPaymentDb(paymentData)
      const updatedPayment = await Payment.findOneAndUpdate(
        { paymentId: paymentId },
        { $set: convertedData },
        { new: true }
      )
      if (!updatedPayment) return null
      return convertIPaymentDbToIPayment(updatedPayment)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findPaymentById(paymentId: string): Promise<IPayment | null> {
    try {
      const payment = await Payment.findOne({ paymentId: paymentId })
      return payment ? convertIPaymentDbToIPayment(payment) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByIdAndDelete(paymentId: string): Promise<IPayment | null> {
    try {
      const deletedPayment = await Payment.findOneAndDelete({ paymentId: paymentId })
      return deletedPayment ? convertIPaymentDbToIPayment(deletedPayment) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default PaymentBaseRepo
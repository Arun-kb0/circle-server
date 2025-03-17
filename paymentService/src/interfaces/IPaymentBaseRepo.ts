import IPayment from '../interfaces/IPayment'

interface IPaymentBaseRepo {
  createPayment(paymentData: Partial<IPayment>): Promise<IPayment>
  updatePayment(paymentId: string, paymentData: Partial<IPayment>): Promise<IPayment | null>
  findPaymentById(paymentId: string): Promise<IPayment | null>
  findByIdAndDelete(paymentId: string): Promise<IPayment | null>
}

export default IPaymentBaseRepo


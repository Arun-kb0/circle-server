
interface IPayment {
  _id: string
  paymentId: string
  orderId: string
  method: string
  amount: number
  currency: string
  status: 'initiated' | 'successful' | 'failed'
  transactionDate: string
  createdAt: string
  updatedAt: string
}

export default IPayment
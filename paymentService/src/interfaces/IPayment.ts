
interface IPayment {
  _id: string
  transactionId: string
  orderId: string
  method: string
  amount: number
  currency: string
  status: 'initiated' | 'successful' | 'failed'
  transactionDate: string
  createdAt: string
  updatedAt: string
  merchantTransactionId: string
  arn: string
  authRefId: string
  userId:string
}

export default IPayment
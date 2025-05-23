
interface ITransaction {
  _id: string;
  userId: string;
  senderId: string
  receiverId: string
  type: 'credit' | 'debit'
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string
  updatedAt: string
}

export interface ITransactionExt extends ITransaction {
  userName?: string
  userImage?: string
}

export interface ITransactionAdmin extends ITransaction {
  senderName?: string;
  senderImage?: string;
  senderEmail?: string;
  receiverImage?: string;
  receiverName?: string;
  receiverEmail?: string;
}

export default ITransaction
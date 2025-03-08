import IWallet from './IWallet'
import ITransaction from './ITransaction'
import { TransactionPagination } from '../constants/types'

interface IWalletBaseRepo {
  createWallet(wallet: IWallet): Promise<IWallet | null>
  findWalletByUserId(userId: string): Promise<IWallet | null>
  findByUserIdAndUpdateAmount(userId: string, amount: number, isInc: boolean): Promise<IWallet | null>

  createTransaction(userId: string, senderId: string, receiverId: string,  amount: number, isCred: boolean,status: ITransaction['status']): Promise<ITransaction>
  findTransactionsByUserIdCount(userId: string): Promise<number>
  findTransactionsByUserId(userId: string, limit: number, startIndex: number): Promise<ITransaction[]>

}

export default IWalletBaseRepo
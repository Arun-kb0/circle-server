import ITransaction from "../../interfaces/ITransaction";
import IWallet from "../../interfaces/IWallet";
import IWalletBaseRepo from "../../interfaces/IWalletBaseRepo";
import { Wallet } from '../../model/walletModel'
import { ITransactionDb, Transaction } from '../../model/transactionModel'
import {
  convertIWalletDbToIWallet, convertIWalletToIWalletDb,
  convertITransactionDbToITransaction, convertITransactionToITransactionDb,
  convertToObjectId
} from '../../util/converter'
import handleError from '../../util/handleError'
import { FilterQuery } from "mongoose";

class WalletBaseRepo implements IWalletBaseRepo {

  async filteredTransactionsByDateAndTextCount(searchText: string, startDate?: string, endDate?: string): Promise<number> {
    try {
      let query: FilterQuery<ITransactionDb> = {}
      if (searchText.trim() !== '') {
        const searchNumber = parseFloat(searchText);
        query.$or = [
          { currency: { $regex: searchText, $options: 'i' } },
          { type: { $regex: searchText, $options: 'i' } }
        ]
      }
      if (startDate || endDate) {
        query.createdAt = {} as Record<string, Date>;
        if (startDate) {
          query.createdAt.$gte = startDate
        }
        if (endDate) {
          query.createdAt.$lte = endDate
        }
      }
      const count = await Transaction.countDocuments(query)
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async filteredTransactionsByDateAndText(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<ITransaction[]> {
    try {
      let query: FilterQuery<ITransactionDb> = {}
      if (searchText.trim() !== '') {
        query.$or = [
          { currency: { $regex: searchText, $options: 'i' } },
          { type: { $regex: searchText, $options: 'i' } }
        ]
      }
      if (startDate || endDate) {
        query.createdAt = {} as Record<string, Date>;
        if (startDate) {
          query.createdAt.$gte = startDate
        }
        if (endDate) {
          query.createdAt.$lte = endDate
        }
      }
      console.log(query)
      const transaction = await Transaction.find(query).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      console.log('transaction length', transaction.length)
      const convertedData = transaction.map(item => convertITransactionDbToITransaction(item))
      return convertedData
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createTransaction(transaction: Partial<ITransaction>): Promise<ITransaction> {
    try {
      const convertedTransaction = convertITransactionToITransactionDb(transaction)
      const newTransaction = await Transaction.create(convertedTransaction)
      return convertITransactionDbToITransaction(newTransaction)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findWalletByUserId(userId: string): Promise<IWallet | null> {
    try {
      const userObjId = convertToObjectId(userId)
      const wallet = await Wallet.findOne({ userId: userObjId })
      return wallet ? convertIWalletDbToIWallet(wallet) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createWallet(wallet: IWallet): Promise<IWallet | null> {
    try {
      const convertedWallet = convertIWalletToIWalletDb(wallet)
      const isExist = await Wallet.exists({ userId: convertedWallet.userId })
      if (isExist) return null
      const newWallet = await Wallet.create(convertedWallet)
      return convertIWalletDbToIWallet(newWallet)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findByUserIdAndUpdateAmount(userId: string, amount: number, isInc: boolean): Promise<IWallet | null> {
    try {
      const userObjId = convertToObjectId(userId)
      const update = isInc ? { $inc: { balance: amount } } : { $inc: { balance: -amount } }
      const updatedWallet = await Wallet.findOneAndUpdate(
        { userId: userObjId },
        update,
        { new: true }
      )
      if (!updatedWallet) return null
      return convertIWalletDbToIWallet(updatedWallet)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findTransactionsByUserIdCount(userId: string): Promise<number> {
    try {
      const userObjId = convertToObjectId(userId)
      const count = await Transaction.countDocuments({ userId: userObjId })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findTransactionsByUserId(userId: string, limit: number, startIndex: number): Promise<ITransaction[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const newTransaction = await Transaction.find({ userId: userObjId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      if (!newTransaction) return []
      const convertedTransactions = newTransaction.map(item => convertITransactionDbToITransaction(item))
      return convertedTransactions
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default WalletBaseRepo
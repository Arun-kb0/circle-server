import ISubscription from "../interfaces/ISubscription";
import ITransaction, { ITransactionExt } from "../interfaces/ITransaction";

export type OrderOptionType = {
  method: string;
  url: string;
  headers: {
    accept: string;
    'Content-Type': string;
    'X-VERIFY': string;
  };
  data: {
    request: string;
  };
}

export type OrderStatusOptionType = {
  method: string;
  url: string;
  headers: {
    accept: string;
    'Content-Type': string;
    'X-VERIFY': string;
    'X-MERCHANT-ID': string;
  };
}

export type SubscriptionPagination = {
  currentPage: number
  numberOfPages: number
  subscriptions: ISubscription[]
}

export type TransactionPagination = {
  currentPage: number
  numberOfPages: number
  transactions: ITransactionExt[]
}
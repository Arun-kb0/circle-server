import IMessage from "../interfaces/IMessage";

export type SvcReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>

export type PaginationMessages = {
  messages: IMessage[];
  numberOfPages: number;
  currentPage: number;
}
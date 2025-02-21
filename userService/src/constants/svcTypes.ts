import { IUser } from "../model/UserModel";

export type PaginationUsers = {
  users: IUser[];
  numberOfPages: number;
  currentPage: number;
}

export type FuncReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>
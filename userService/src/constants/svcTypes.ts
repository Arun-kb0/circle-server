import IUser from "../interfaces/IUser";
import { IBlockUserExt } from '../interfaces/IBlockUser'

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

export type PaginationBlockedUsers = {
  blockedUsers: IBlockUserExt[];
  numberOfPages: number;
  currentPage: number;
}
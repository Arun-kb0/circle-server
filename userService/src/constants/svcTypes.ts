import IUser  from "../interfaces/IUser";

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
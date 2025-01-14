import ILike from "../interfaces/ILike";

export type SvcReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>

export type PaginationPost<T> = {
  posts: T;
  numberOfPages: number;
  currentPage: number;
  likes: ILike[]
} 

export type PaginationComment<T> = {
  comments: T;
  numberOfPages: number;
  currentPage: number;
  likes: ILike[]
} 

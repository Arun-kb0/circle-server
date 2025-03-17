import ILike from "../interfaces/ILike";
import { IPostExt } from "../interfaces/IPost";
import { IReportExt } from "../interfaces/IReport";

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

export type PaginationSavedPost = {
  savedPosts: IPostExt[];
  numberOfPages: number;
  currentPage: number;
}

export type PaginationReports = {
  reports: IReportExt[];
  numberOfPages: number;
  currentPage: number;
}
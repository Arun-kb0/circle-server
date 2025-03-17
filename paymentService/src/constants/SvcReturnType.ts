
export type SvcReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>

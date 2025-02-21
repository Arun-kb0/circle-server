type SvcFuncReturnType<T> = Promise<{
  err: number | null;
  errMsg?: string
  data: T | null;
}>

export default SvcFuncReturnType
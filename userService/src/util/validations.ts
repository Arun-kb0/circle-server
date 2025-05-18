import * as grpc from '@grpc/grpc-js'
import { CustomError } from './CustomError'

// * specific for controller 
export const validateResponse = (res: { err: number | null, data: any, errMsg?:string }) => {
  if (!res) {
    const code = grpc.status.NOT_FOUND
    const message = 'res is empty.'
    throw new CustomError(code, message, 'cnt')
  }
  if (res.err) {
    const code = grpc.status.INTERNAL
    const message = `${res.errMsg}.`
    throw new CustomError(code, message, 'cnt')
  }
  if (!res.data) {
    const code = grpc.status.NOT_FOUND
    const message = `user not found.`
    throw new CustomError(code, message, 'cnt')
  }
}

export const validateRequest = (msg: string, ...args: any[]) => {
  // console.log(args)
  let isFailed = false
  const typesWithLen = ['string','array']
  args?.forEach((res) => {
    if (!res) {
      isFailed = true
    } else if (typesWithLen.includes(typeof res) && res.length === 0) {
      isFailed = true
    }
  })
  if (isFailed) {
    const code = grpc.status.INVALID_ARGUMENT
    throw new CustomError(code, msg, 'cnt')
  }
}
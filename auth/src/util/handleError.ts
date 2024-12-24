import * as grpc from '@grpc/grpc-js'
import { CustomError } from './CustomError'


const handleError = (err: any) => {
  console.error(err)
  let msg = 'unexpected error occurred.'
  let code = grpc.status.INTERNAL

  if (err instanceof CustomError) {
    if (err.level === 'cnt') {
      msg = err.message
      code = err.code
    } else if (err.level === 'svc') {
      code = err.code
      msg = err.message
    }
  } else if (err instanceof Error) {
    msg = err.message
  }

  return { message: msg, code }
}

export default handleError
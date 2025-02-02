import { ServerUnaryCall, sendUnaryData, handleUnaryCall } from '@grpc/grpc-js';
import logger from '../logger/loggerIndex';


const RESPONSE_SIZE_THRESHOLD = 500;

const handleResponseSize = (res: any) => {
  const resString = JSON.stringify(res)
  const resSize = Buffer.byteLength(resString)
  return resSize < RESPONSE_SIZE_THRESHOLD
    ? res
    : { message: "response size is too large ", resSize }
}


function logInterceptor<T, R>(handler: handleUnaryCall<T, R>): handleUnaryCall<T, R> {
  return (call: ServerUnaryCall<T, R>, callback: sendUnaryData<R>) => {
    // * request
    const path = call.getPath()
    const requestData = call.request

    console.log('call and request data *** \n')
    console.log(path )
    console.log(requestData)
    console.log('call and request data end ---- \n')
    // * response
    const wrappedCallback: sendUnaryData<R> = (err, response) => {
      if (err) {
        const formatted = {
          request: { path, requestData },
          response: { error: err }
        }
        logger.log("error", "user-service", {
          logData: formatted
        })
      } else {

        const formatted = {
          request: { path, requestData },
          response: {
            requestData: handleResponseSize(response)
          }
        }
        logger.log("info", "user-service", {
          logData: formatted
        })
      }

      callback(err, response)
    }

    // * handler call
    handler(call, wrappedCallback)
  }
}

export default logInterceptor 

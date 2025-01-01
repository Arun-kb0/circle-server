import { ServerUnaryCall, sendUnaryData, handleUnaryCall, StatusObject, ServerErrorResponse } from '@grpc/grpc-js';
import logger from '../logger/loggerIndex';


function logInterceptor<T, R>(handler: handleUnaryCall<T, R>): handleUnaryCall<T, R> {
  return (call: ServerUnaryCall<T, R>, callback: sendUnaryData<R>) => {
    // * request
    const path = call.getPath()
    const requestData = call.request

    // * response

    const wrappedCallback: sendUnaryData<R> = (err, response) => {
      // * log
      if (err) {
        const formatted = {
          request: { path, requestData },
          response: { error: err }
        }
        logger.log("info", "auth-service", {
          logData: formatted
        })
      } else {
        const formatted = {
          request: { path, requestData },
          response: { requestData: response }
        }
        logger.log("info", "auth-service", {
          logData: formatted
        })
      }

      callback(err, response);
    };


    // * Calling handler
    handler(call, wrappedCallback);
  };
}

export default logInterceptor 
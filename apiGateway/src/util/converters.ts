import * as grpc from '@grpc/grpc-js'
import httpStatus from '../constants/httpStatus'

export const grpcCodeToHttpStatus = (code: grpc.status): httpStatus => {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR

  switch (code) {
    case grpc.status.UNKNOWN:
      statusCode = httpStatus.INTERNAL_SERVER_ERROR
      break
    case grpc.status.INVALID_ARGUMENT:
      statusCode = httpStatus.BAD_REQUEST
      break;
    case grpc.status.DEADLINE_EXCEEDED:
      statusCode = httpStatus.GATEWAY_TIMEOUT
      break;
    case grpc.status.NOT_FOUND:
      statusCode = httpStatus.NOT_FOUND
      break;
    case grpc.status.ALREADY_EXISTS:
      statusCode = httpStatus.CONFLICT
      break;
    case grpc.status.PERMISSION_DENIED:
      statusCode = httpStatus.FORBIDDEN
      break;
    case grpc.status.RESOURCE_EXHAUSTED:
      statusCode = httpStatus.TOO_MANY_REQUESTS
      break;
    case grpc.status.FAILED_PRECONDITION:
      statusCode = httpStatus.BAD_REQUEST
      break;
    case grpc.status.ABORTED:
      statusCode = httpStatus.CONFLICT
      break;
    case grpc.status.OUT_OF_RANGE:
      statusCode = httpStatus.BAD_REQUEST
      break;
    case grpc.status.UNIMPLEMENTED:
      statusCode = httpStatus.NOT_IMPLEMENTED
      break;
    case grpc.status.INTERNAL:
      statusCode = httpStatus.INTERNAL_SERVER_ERROR
      break;
    case grpc.status.UNAVAILABLE:
      statusCode = httpStatus.GONE
      break;
    case grpc.status.DATA_LOSS:
      statusCode = httpStatus.INTERNAL_SERVER_ERROR
      break;
    case grpc.status.UNAUTHENTICATED:
      statusCode = httpStatus.UNAUTHORIZED
      break;
    default:
      statusCode = httpStatus.INTERNAL_SERVER_ERROR
  }

  return statusCode
}

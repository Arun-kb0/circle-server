import ILikeController, { LikeHandler, UnlikeHandler } from '../interfaces/ILikeController'
import handleError from '../util/handleError'
import { validateRequest, validateResponse } from '../util/validations'
import { convertLikeForDb } from '../util/converter'
import ILikeService from '../interfaces/ILikeService'
import ILike from '../interfaces/ILike'
import httpStatus from '../constants/httpStatus'
import { CustomError } from '../util/CustomError'
import * as grpc from '@grpc/grpc-js'

class LikeController implements ILikeController {

  constructor(
    private likeService: ILikeService
  ) { }

  like: LikeHandler = async (call, cb) => {
    try {
      const { contentId, contentType, authorId } = call.request
      validateRequest('contentId , contentType and authorId required', contentId, contentType, authorId)
      const convertedLike = convertLikeForDb({ contentId, contentType, authorId })
      const res = await this.likeService.like(convertedLike.contentId, convertedLike.contentType, convertedLike.authorId)
      if (res.err === httpStatus.CONFLICT) throw new CustomError(grpc.status.INVALID_ARGUMENT, res.errMsg as string, 'cnt')
      cb(null, { like: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  };


  unlike: UnlikeHandler = async (call, cb) => {
    try {
      const { contentId, authorId } = call.request
      validateRequest('contentId and authorId required', contentId, authorId)
      const res = await this.likeService.unlike(authorId as string, contentId as string,)
      validateResponse(res)
      cb(null, { like: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

}

export default LikeController
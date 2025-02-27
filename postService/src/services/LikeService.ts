import SvcFuncReturnType from '../constants/SvcReturnType';
import ILike, { ILikeExt } from '../interfaces/ILike';
import ILikeService from '../interfaces/ILikeService'
import handleError from '../util/handleError'
import httpStatus from '../constants/httpStatus'
import ILikeRepo from '../interfaces/ILikeRepo';
import { publishMessage } from '../util/rabbitmq';
import { QueueNotificationDataType } from '../constants/types'
import { addUserToLike } from '../util/userClientFunctions';

const QUEUE_NAME = process.env.NOTIFICATION_QUEUE_NAME || ""

class LikeService implements ILikeService {

  constructor(
    private likeRepo: ILikeRepo
  ) { }

  async like(contentId: string, contentType: ILike['contentType'], authorId: string): SvcFuncReturnType<ILikeExt> {
    try {
      const isLiked = await this.likeRepo.checkIsLiked(authorId, contentId)
      if (isLiked) return { err: httpStatus.CONFLICT, errMsg: 'already liked', data: null }

      const like = {
        contentId,
        contentType,
        authorId
      }
      const newLike = await this.likeRepo.like(like)
      if (!newLike) throw new Error('like failed')

      const userAddedLike = await addUserToLike(newLike)
      // * send notification
      const notificationData: QueueNotificationDataType = {
        _id: '',
        authorId: newLike.authorId,
        receiverId: '',
        type: 'like',
        message: 'user liked post',
        read: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        data: {
          id: newLike.contentId,
          contentType: newLike.contentType,
          authorName: userAddedLike?.authorName
        }
      }
      publishMessage(QUEUE_NAME, JSON.stringify(notificationData))
      return { err: null, data: newLike }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async unlike(authorId: string, contentId: string,): SvcFuncReturnType<ILike> {
    try {
      const isLiked = await this.likeRepo.checkIsLiked(authorId, contentId)
      if (!isLiked) return { err: httpStatus.CONFLICT, errMsg: 'already unliked', data: null }
      const deletedLike = await this.likeRepo.unlike(authorId, contentId)
      return { err: null, data: deletedLike }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

}

export default LikeService
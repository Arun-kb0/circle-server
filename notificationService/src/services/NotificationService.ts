import { QueueNotificationDataType, SvcReturnType } from "../constants/types";
import { INotification } from "../interfaces/INotification";
import INotificationRepo from "../interfaces/INotificationRepo";
import INotificationService from "../interfaces/INotificationService";
import handleError from "../util/handleError";
import FeedGrpcClient from '../config/FeedGrpcClient'

const feedClient = FeedGrpcClient.getClient()

class NotificationService implements INotificationService {

  constructor(
    private notificationRepo: INotificationRepo
  ) { }

  async sendLikeNotifications(data: QueueNotificationDataType): SvcReturnType<{ status: boolean; }> {
    try {
      console.log('sendNotification function in service')
      console.log(data)
      const { id, contentType, authorName } = data.data
      if (contentType === 'post') {
        feedClient.getPost({ postId: id }, (err, msg) => {
          if (err) return new Error(err.message)
          if (!msg) return new Error('no data found')
          const receiverId = msg.post?.authorId
          const notification: Partial<INotification> = {
            authorId: data.authorId,
            receiverId,
            type: "like",
            message: `${authorName} liked your post`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          }
          console.log(notification)
          //  ! get socket by using this id
          //   ! add user and socket id to redis
          //  ! send notification to that socket
          return { err: null, data: { status: true } }
        })
      }

      if (contentType === 'comment') {
        feedClient.getSingleComment({ commentId: id }, (err, msg) => {
          if (err) return new Error(err.message)
          if (!msg) return new Error('no data found')
          const receiverId = msg.comment?.authorId
          const notification: Partial<INotification> = {
            authorId: data.authorId,
            receiverId,
            type: "like",
            message: `${authorName} liked your comment`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          }
          console.log(notification)
          return { err: null, data: { status: true } }
        })
      }

      return { err: null, data: { status: true } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }


  async sendNotification(notification: INotification): SvcReturnType<{ status: boolean; }> {
    try {
      console.log('sendNotification function in service')
      console.log(notification)
      return { err: null, data: { status: true } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

}

export default NotificationService
import { QueueNotificationDataType, SvcReturnType } from "../constants/types";
import { INotification } from "../interfaces/INotification";
import INotificationRepo from "../interfaces/INotificationRepo";
import INotificationService from "../interfaces/INotificationService";
import handleError from "../util/handleError";
import FeedGrpcClient from '../config/FeedGrpcClient'
import { Server, Socket } from "socket.io";
import { SocketEvents } from "../constants/enums";
import { getUser } from "../util/notificationUsersCache";

const feedClient = FeedGrpcClient.getClient()

class NotificationService implements INotificationService {

  constructor(
    private notificationRepo: INotificationRepo,
    private socket: Server
  ) { }

  async handleLikeNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean; }> {
    try {
      console.log('sendNotification function in service')
      console.log(data)
      const { id, contentType, authorName } = data.data
      if (contentType === 'post') {
        feedClient.getPost({ postId: id }, async (err, msg) => {
          if (err) return new Error(err.message)
          if (!msg) return new Error('no data found')
          const receiverId = msg.post?.authorId
          const notification: Omit<INotification,'_id'> = {
            authorId: data.authorId,
            receiverId : receiverId as string,
            type: "like",
            message: `${authorName} liked your post`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          }
          this.sendNotification(notification)
          return { err: null, data: { status: true } }
        })
      }

      if (contentType === 'comment') {
        feedClient.getSingleComment({ commentId: id }, (err, msg) => {
          if (err) return new Error(err.message)
          if (!msg) return new Error('no data found')
          const receiverId = msg.comment?.authorId
          const notification: Omit<INotification,'_id'> = {
            authorId: data.authorId,
            receiverId: receiverId as string,
            type: "like",
            message: `${authorName} liked your comment`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          }
          this.sendNotification(notification)
          return { err: null, data: { status: true } }
        })
      }

      return { err: null, data: { status: true } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async handleNotification(data: QueueNotificationDataType): Promise<void> {
    switch (data.type) {
      case 'like':
        this.handleLikeNotification(data)
        break;
      default:
        console.log('no matching call found')
    }
  }

  async sendNotification(notification: Omit<INotification, '_id'>): SvcReturnType<{ status: boolean; }> {
    try {
      console.log(notification)
      const userSocket = await getUser(notification.receiverId)
      if (!userSocket) throw new Error('user socket not found in redis')
      this.socket.to(userSocket).emit(SocketEvents.newNotification, notification)
      return { err: null, data: { status: true } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

}

export default NotificationService
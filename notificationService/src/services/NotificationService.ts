import { ChatUserType, PaginationNotifications, QueueNotificationDataType, SvcReturnType } from "../constants/types";
import { INotification, INotificationExt } from "../interfaces/INotification";
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

  async handleCallNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean; }> {
    try {
      const { authorName, authorImage, roomId, signal ,callModelType} = data.data
      const notification: Omit<INotificationExt, '_id'> = {
        authorId: data.authorId,
        receiverId: data.receiverId,
        type: "call",
        message: `incoming call from ${authorName}`,
        read: false,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        authorName: authorName
      }
      const chatUser: ChatUserType = {
        userId: data.authorId,
        name: authorName,
        image: authorImage
      }
      this.sendNotification(notification, { chatUser, roomId, signal, callModelType })
      return { err: null, data: { status: true } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async handleCommentNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean; }> {
    try {
      const { id, contentType, authorName, parentId } = data.data
      if (!parentId) {
        feedClient.getPost({ postId: id }, async (err, msg) => {
          if (err) return new Error(err.message)
          if (!msg) return new Error('no data found')
          const receiverId = msg.post?.authorId
          const notification: Omit<INotificationExt, '_id'> = {
            authorId: data.authorId,
            receiverId: receiverId as string,
            type: "comment",
            message: `${authorName} commented on your post`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            authorName: authorName
          }
          this.sendNotification(notification)
          return { err: null, data: { status: true } }
        })
      }

      if (parentId) {
        feedClient.getSingleComment({ commentId: parentId }, (err, msg) => {
          if (err) return new Error(err.message)
          if (!msg) return new Error('no data found')
          const receiverId = msg.comment?.authorId
          const notification: Omit<INotificationExt, '_id'> = {
            authorId: data.authorId,
            receiverId: receiverId as string,
            type: "comment",
            message: `${authorName} replied to your comment`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            authorName: authorName
          }
          this.sendNotification(notification)
          return { err: null, data: { status: true } }
        })
      }
      return { err: null, data: { status: false } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }


  async handleLikeNotification(data: QueueNotificationDataType): SvcReturnType<{ status: boolean; }> {
    try {
      const { id, contentType, authorName } = data.data
      if (contentType === 'post') {
        feedClient.getPost({ postId: id }, async (err, msg) => {
          if (err) return new Error(err.message)
          if (!msg) return new Error('no data found')
          const receiverId = msg.post?.authorId
          const notification: Omit<INotificationExt, '_id'> = {
            authorId: data.authorId,
            receiverId: receiverId as string,
            type: "like",
            message: `${authorName} liked your post`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            authorName: authorName
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
          const notification: Omit<INotificationExt, '_id'> = {
            authorId: data.authorId,
            receiverId: receiverId as string,
            type: "like",
            message: `${authorName} liked your comment`,
            read: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            authorName: authorName
          }
          this.sendNotification(notification)
          return { err: null, data: { status: true } }
        })
      }

      return { err: null, data: { status: false } }
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
      case 'comment':
        this.handleCommentNotification(data)
        break
      case 'call':
        this.handleCallNotification(data)
      default:
        console.log('no matching call found')
    }
  }

  async sendNotification(notification: Omit<INotificationExt, '_id'>, data?: any): SvcReturnType<{ status: boolean; }> {
    try {
      if (notification.receiverId === notification.authorId) return { err: null, data: { status: false } }
      console.log(notification)
      const userSocket = await getUser(notification.receiverId)
      if (!userSocket) throw new Error('user socket not found in redis')
      const { authorName, authorImage, createdAt, updatedAt, ...rest } = notification
      const newNotification = await this.notificationRepo.createNotification(rest as INotification)
      const updatedNotification = { ...newNotification, authorImage, authorName, data }
      this.socket.to(userSocket).emit(SocketEvents.newNotification, updatedNotification)
      return { err: null, data: { status: true } }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  // * grpc unary calls
  async readNotifications(notificationIds: string[]): SvcReturnType<string[]> {
    try {
      const updatedIds = await this.notificationRepo.readNotifications(notificationIds)
      return { err: null, data: updatedIds }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getNotifications(receiverId: string, page: number): SvcReturnType<PaginationNotifications> {
    try {
      const data = await this.notificationRepo.getNotifications(receiverId, page)
      return { err: null, data: data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }


}

export default NotificationService
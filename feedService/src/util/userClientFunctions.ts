import UserGrpcClient from '../config/UserGrpcClient'
import IComment, { ICommentExt } from '../interfaces/IComment'
import ILike, { ILikeExt } from '../interfaces/ILike'
import IPost, { IPostExt } from '../interfaces/IPost'
import { User } from '../proto/userProto/user/User'

const client = UserGrpcClient.getClient()

const getMultipleUsers = async (userIds: string[]) => {
  try {
    const users: User[] = await new Promise((resolve, reject) => {
      client.getMultipleUser({ userIds }, (err, msg) => {
        if (err) return reject(new Error(err.message));
        if (!msg || !msg?.users) return reject(new Error('getMultipleUser response is empty.'));
        resolve(msg.users);
      });
    })
    return users
  } catch (error) {
    console.warn('getMultipleUsers failed')
    console.log(error)
    return []
  }
}

const getUser = async (userId: string) => {
  try {
    const user: User = await new Promise((resolve, reject) => {
      client.getUser({ userId }, (err, msg) => {
        if (err) return reject(new Error(err.message));
        if (!msg || !msg?.user) return reject(new Error('getMultipleUser response is empty.'));
        resolve(msg.user as User);
      })
    })
    return user
  } catch (error) {
    console.warn('getUser failed')
    console.log(error)
    return undefined
  }
}


export const addUserToPosts = async (posts: IPost[]) => {
  try {
    const userIds = posts.map(post => post.authorId)
    const users = await getMultipleUsers(userIds)
    console.log(users)
    const postsWithUsers = posts.map((post) => {
      const user = users.find((user) => user._id === post.authorId);
      return {
        ...post,
        authorName: user?.name || undefined,
        authorImage: user?.image?.url || undefined,
      }
    })
    // console.log(postsWithUsers)
    return postsWithUsers
  } catch (error) {
    console.log('users and posts merging failed')
    console.log(error)
    return []
  }
}

export const addUserToPost = async (post: IPost): Promise<IPostExt | null> => {
  try {
    const user = await getUser(post.authorId)
    return {
      ...post,
      authorName: user?.name,
      authorImage: user?.image?.url
    } as IPostExt
  } catch (error) {
    console.log('get single user and post merging failed')
    console.log(error)
    return null
  }
}

export const addUserToComments = async (comments: IComment[]) => {
  try {
    const userIds = comments.map(comment => comment.authorId)
    const users = await getMultipleUsers(userIds)
    const commentsWithUsers = comments.map((comment) => {
      const user = users.find((user) => user._id === comment.authorId);
      return {
        ...comment,
        authorName: user?.name || undefined,
        authorImage: user?.image?.url || undefined,
      }
    })
    return commentsWithUsers as ICommentExt[]
  } catch (error) {
    console.log('comment and user merging failed')
    console.log(error)
    return []
  }
}

export const addUserToLikes = async (likes: ILike[]): Promise<ILikeExt[]> => {
  try {
    const userIds = likes.map(like => like.authorId)
    const users = await getMultipleUsers(userIds)
    const likeWithUsers = likes.map((like) => {
      const user = users.find((user) => user._id === like.authorId);
      return {
        ...like,
        authorName: user?.name || undefined,
        authorImage: user?.image?.url || undefined,
      }
    })
    return likeWithUsers
  } catch (error) {
    console.log('like and user merging failed')
    console.log(error)
    return []
  }
}


export const addUserToLike = async (like: ILike): Promise<ILikeExt | null> => {
  try {
    const user = await getUser(like.authorId)
    return {
      ...like,
      authorName: user?.name || undefined,
      authorImage: user?.image?.url || undefined,
    }
  } catch (error) {
    console.log('like and user merging failed')
    console.log(error)
    return null
  }
}


import UserGrpcClient from '../config/UserGrpcClient'
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

export const addUserToPost = async (posts: IPost[]) => {
  try {
    const userIds = posts.map(post => post.authorId)
    const users = await getMultipleUsers(userIds)
    const postsWithUsers = posts.map((post) => {
      const user = users.find((user) => user._id === post.authorId);
      const postsObj = post?.toObject ? post.toObject() : post
      return {
        ...postsObj,
        authorName: user?.name || undefined,
        authorImage: user?.image?.url || undefined,
      };
    });
    return postsWithUsers
  } catch (error) {
    console.log('getMultipleUsers failed')
    console.log(error)
    return []
  }
}
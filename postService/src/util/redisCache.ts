import { consumeMessage } from '../util/rabbitmq'
import RedisClient from '../config/RedisClient'
import UserGrpcClient from '../config/UserGrpcClient'
import IPost from '../interfaces/IPost'
import { promisify } from 'util'

const userGrpcClient = UserGrpcClient.getClient()
const redisClient = RedisClient.getInstance()
const QUEUE_NAME = 'post-popular'
const MIN_FOLLOWER_COUNT = 10
const MAX_POST_COUNT = 20


const isUserPopular = async (userId: string): Promise<boolean> => {
  try {
    const result = await new Promise<boolean>((resolve, reject) => {
      userGrpcClient.getUser({ userId }, (err, msg) => {
        if (err || !msg || !msg.user || msg.user.followerCount === undefined) {
          console.log(err)
          return reject(new Error('Failed to find user or invalid response'));
        }
        resolve(msg.user.followerCount >= MIN_FOLLOWER_COUNT);
      });
    });

    return result
  } catch (error) {
    console.log("user popular check failed")
    return false
  }
}

// * redis callback converted to promise
const llenAsync = promisify(redisClient.llen).bind(redisClient)
const lpopAsync = promisify(redisClient.lpop).bind(redisClient)

const rpushAsync = (...args: [string, ...string[]]) => {
  return new Promise((resolve, reject) => {
    redisClient.rpush(...args, (err, reply) => {
      if (err) reject(err)
      else resolve(reply)
    })
  })
}

export const addPostToCache = async () => {
  try {
    const msg = await consumeMessage(QUEUE_NAME)
    console.log("msg?.content from addPostToCache ")
    console.log(msg?.content)
    if (!msg) {
      console.error('No message received.');
      return
    }
    const postString = msg.content.toString()
    const post = JSON.parse(postString) as IPost
    if (!await isUserPopular(post.authorId)) return

    await rpushAsync(QUEUE_NAME, postString)
    const length = await llenAsync(QUEUE_NAME)
    if (!length) throw new Error('redis stack length not found')

    if (length > MAX_POST_COUNT) {
      await lpopAsync(QUEUE_NAME)
      console.log('Oldest post removed from Redis list.');
    }

  } catch (error) {
    console.log('redis add data failed ')
    console.error(error)
  }
}


import UserGrpcClient from '../config/UserGrpcClient'
import { v4 as uuid } from 'uuid'
import { GetFollowersResponse__Output } from '../protos/userProto/user/GetFollowersResponse'
import HttpError from './HttpError'
import httpStatus from '../constants/httpStatus'

const client = UserGrpcClient.getClient()
const usersMap = new Map()

const getFollowingPromise = async (userId: string, page: number): Promise<GetFollowersResponse__Output> => {
  console.log(`**  userId: ${userId} , ** page: ${page}`)
  return new Promise((resolve, reject) => {
    if (typeof userId !== 'string' && isNaN(Number(page))) return reject(new HttpError(httpStatus.BAD_REQUEST, 'page and userId are required.'))
    client.getFollowing({ userId, page }, (err, msg) => {
      if (err) return reject(err)
      if (!msg) return reject(new Error('grpc response is empty'))
      resolve(msg)
    })
  })
}

const connectUserSockets = async (userId: string): Promise<string | undefined> => {
  try {
    console.log('userid !_@_@- ', userId)
    if (usersMap.has(userId)) return usersMap.get(userId)

    const friendsRoomId = uuid()
    usersMap.set(userId, friendsRoomId)
    const msg = await getFollowingPromise(userId, 1)
    msg.users?.forEach(user => usersMap.set(user._id, friendsRoomId))

    const numberOfPages = msg.numberOfPages as number
    for (let p = 2; p <= numberOfPages; p++) {
      const msg = await getFollowingPromise(userId, p)
      msg.users?.forEach(user => usersMap.set(user._id, friendsRoomId))
    }
    console.log('connectUSerSockets users map')
    console.log(usersMap)

    return friendsRoomId

  } catch (error) {
    console.error(error)
  }
}




export default connectUserSockets
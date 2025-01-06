import jwt, { JsonWebTokenError, JwtPayload, VerifyCallback, VerifyErrors } from "jsonwebtoken";
import { JwtWithUsername } from '../constants/types'
import httpStatus from '../constants/httpStatus'

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string || 'secret'

type VerifyReturnType = { status: httpStatus, msg: string, data?: { username: string, userId: string } }

const verifyToken = (token: string): VerifyReturnType => {
  try {
    let res: VerifyReturnType = { status: httpStatus.UNAUTHORIZED, msg: 'no token found' }
    const verifyCallback: VerifyCallback = (status, decoded) => {
      console.log("api gate way")
      console.log(decoded)

      if (status || !decoded || typeof decoded === 'string') {
        res.status = httpStatus.UNAUTHORIZED
        res.msg = 'user not authorized'
        return
      }
      const payload = decoded as JwtWithUsername
      if (!payload?.username) {
        res.status = httpStatus.UNAUTHORIZED
        res.msg = 'user not authorized'
        return
      }
      const { username, userId } = payload
      res.status = httpStatus.OK
      res.msg = username
      res.data = { userId, username }
    }

    jwt.verify(
      token,
      ACCESS_TOKEN_SECRET,
      verifyCallback
    )
    return res

  } catch (error) {
    console.log(error)

    let status = httpStatus.INTERNAL_SERVER_ERROR
    let msg = 'unexpected error occurred.'
    if (error instanceof JsonWebTokenError) {
      status = httpStatus.UNAUTHORIZED
      msg = error.message
    } else if (error instanceof Error) {
      msg = error.message
    }
    return { status, msg }
  }
}

export default verifyToken
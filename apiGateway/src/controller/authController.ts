import { NextFunction, Request, Response } from "express";
import * as grpc from '@grpc/grpc-js'
import path from 'path'
import getPackageDef from '../util/getPackageDef'
import { ProtoGrpcType } from "../protos/auth";
import httpStatus from "../constants/httpStatus";
import HttpError from "../util/HttpError";
import connectUserSockets from '../util/connectUserSockets'
import { AuthRequest } from "../constants/types";
import blockedUsersSet from "../util/blockedUsersSet";

const REFRESH_TOKEN_MAX_AGE = 24 * 60 * 60 * 1000
const PROTO_PATH = path.join(__dirname, '..', 'protos', 'auth.proto')
const HOST = process.env.AUTH_SERVICE_HOST || 'localhost'
const PORT = process.env.AUTH_SERVICE_PORT || 50051
const IP_ADDRESS = `${HOST}:${PORT}`

const packageDef = getPackageDef(PROTO_PATH)
const authProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const client = new authProto.authType.AuthService(
  IP_ADDRESS,
  grpc.credentials.createInsecure()
)

export const googleOauthLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.body
    const TOKEN_LENGTH = 1180

    if (typeof token !== 'string') {
      throw new HttpError(httpStatus.BAD_REQUEST, 'token required')
    }
    client.googleOauth({ token }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new Error('grpc oauth response is empty'))
      const { refreshToken, accessToken, ...data } = msg
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: REFRESH_TOKEN_MAX_AGE
      })
      res.status(httpStatus.OK).json({ message: 'Oauth login success', accessToken, ...data })
    })
  } catch (error) {
    next(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body
    client.login({ email, password }, async (err, msg) => {
      if (err?.code === grpc.status.UNAVAILABLE) {
        return next(new HttpError(httpStatus.GONE, 'account blocked'))
      }
      if (err?.code === grpc.status.NOT_FOUND) {
        return next(new HttpError(httpStatus.NOT_FOUND, 'user not found'))
      }
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      const { refreshToken, token, ...data } = msg
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: REFRESH_TOKEN_MAX_AGE
      })
      const friendsRoomId = await connectUserSockets(data.user?._id as string)
      res.status(httpStatus.OK).json({ message: 'login success', accessToken: token, ...data, friendsRoomId })
    })
  } catch (error) {
    next(error)
  }
}

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body
    client.signUp({ name, email, password }, (err, msg) => {
      if (err) return next(err)
      if (!msg) return next(new Error('grpc response is empty'))
      res.status(httpStatus.OK).json({ message: 'signup success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp, otpId } = req.body
    if (!otp || !email || !otpId) throw new HttpError(httpStatus.BAD_REQUEST, 'email and otp is required.')
    client.verifyEmail({ email, otp, otpId }, (err, msg) => {
      if (err?.code === grpc.status.UNAVAILABLE) return (next(new HttpError(httpStatus.GONE, 'otp expired.')))
      if (err?.code === grpc.status.ABORTED) return (next(new HttpError(httpStatus.UNAUTHORIZED, err?.message)))
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      const { refreshToken, ...restMsg } = msg
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: REFRESH_TOKEN_MAX_AGE
      })
      res.status(httpStatus.OK).json({ message: 'email verification success', ...restMsg })
    })
  } catch (error) {
    next(error)
  }
}

export const resendOtp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otpId } = req.body
    client.resendOtp({ email, otpId }, (err, msg) => {
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      res.status(httpStatus.OK).json({ message: 'resend otp success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const logout = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // * get userId from user obj from token
    const cookies = req.cookies
    if (!cookies?.jwt) {
      throw new HttpError(httpStatus.OK, 'no cookie found logout success.')
    }
    const refreshToken = cookies.jwt

    client.logout({ token: refreshToken }, (err, msg) => {
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      })
      res.status(httpStatus.OK).json({ message: "logout success" })
    })
  } catch (error) {
    next(error)
  }
}

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cookies = req.cookies
    if (!cookies?.jwt) {
      throw new HttpError(httpStatus.BAD_REQUEST, 'No cookie found logout success.')
    }
    const refreshToken = cookies.jwt

    client.refresh({ refreshToken }, async (err, msg) => {
      if (err?.code === grpc.status.UNAUTHENTICATED) return new HttpError(httpStatus.UNAUTHORIZED, err.message)
      else if (err) return new HttpError(httpStatus.UNAUTHORIZED, err.message)
      if (!msg) return new Error('grpc response is empty')
      const friendsRoomId = await connectUserSockets(msg.user?._id as string)
      if (blockedUsersSet.has(msg.user?._id as string)) return new HttpError(httpStatus.FORBIDDEN, 'This account is blocked')
      console.log("refresh user name = ",msg.user?.name)
      res.status(httpStatus.OK)
        .json({
          accessToken: msg.accessToken,
          user: msg.user,
          friendsRoomId,
          message: 'refresh success'
        })
    })
  } catch (error) {
    next(error)
  }
}

export const resetPassword = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body
    if (!email || !password) throw new HttpError(httpStatus.BAD_REQUEST, 'email and password required.')
    client.resetPassword({ email, password }, (err, msg) => {
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const resetPwdVerifyOtp = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp, otpId } = req.body
    if (!email || !otp || !otpId) throw new HttpError(httpStatus.BAD_REQUEST, 'email ,otp and otpId are required.')
    client.resetPwdVerifyOtp({ email, otp, otpId }, (err, msg) => {
      if (err?.code === grpc.status.UNAVAILABLE) return (next(new HttpError(httpStatus.GONE, 'otp expired.')))
      if (err?.code === grpc.status.ABORTED) return (next(new HttpError(httpStatus.UNAUTHORIZED, err?.message)))
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      res.status(httpStatus.OK).json({ ...msg })
    })
  } catch (error) {
    next(error)
  }
}


export const resetPwdResendOtp = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otpId } = req.body
    if (!email || !otpId) throw new HttpError(httpStatus.BAD_REQUEST, 'email and otpId are required.')
    client.resendOtp({ email, otpId, isPassword: true }, (err, msg) => {
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      res.status(httpStatus.OK).json({ message: 'resend otp success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}



// * admin


export const adminLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body
    client.adminLogin({ email, password }, (err, msg) => {
      if (err?.code === grpc.status.NOT_FOUND) {
        return next(new HttpError(httpStatus.FORBIDDEN, err.message))
      }
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      const { refreshToken, token, ...data } = msg
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: REFRESH_TOKEN_MAX_AGE
      })
      res.status(httpStatus.OK).json({ message: 'admin login success', accessToken: token, ...data })
    })
  } catch (error) {
    next(error)
  }
}

export const adminSignup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body
    client.adminSignUp({ name, email, password }, (err, msg) => {
      if (err?.code === grpc.status.PERMISSION_DENIED) {
        return next(new HttpError(httpStatus.FORBIDDEN, 'root user mismatch'))
      }
      if (err) return next(err)
      if (!msg) throw new Error('grpc response is empty')
      const { refreshToken, token, ...data } = msg
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: REFRESH_TOKEN_MAX_AGE
      })
      res.status(httpStatus.OK).json({ message: 'admin signup success', accessToken: token, ...data })
    })
  } catch (error) {
    next(error)
  }
}
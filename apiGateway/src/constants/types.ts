import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";


export interface AuthRequest extends Request {
  username?: string;
  userId?: string
}


export interface JwtWithUsername extends JwtPayload {
  username: string
  userId: string
}

export interface MulterRequest extends Request {
  files: Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[] } | undefined;
  username?: string;
  userId?: string
}


export type MessageType = {
  roomId: string
  authorId: string
  authorName: string
  authorImage?: string
  message: string
  time: Date
  status: 'sent' | 'received' | 'seen'
}
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
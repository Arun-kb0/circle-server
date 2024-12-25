import { JwtPayload } from "jsonwebtoken";

export interface JwtWithUsername extends JwtPayload {
  username: string
}
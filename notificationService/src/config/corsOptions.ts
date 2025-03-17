import { CorsOptions } from 'cors'
import { allowOrigins } from './allowOrigins'

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin && allowOrigins.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS.'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}
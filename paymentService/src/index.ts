import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './config/dbConnect'
import grpcConnect from './config/grpcConnect'
import { healthCheck } from './util/healthCheck'


const MONGODB_URI = process.env.PAYMENT_DB_URI || ''
const HTTP_PORT = process.env.PAYMENT_HEALTH_CHECK_PORT || 8087

dbConnect(MONGODB_URI)
  .then(() => {
    grpcConnect()
    healthCheck.listen(HTTP_PORT, () => {
      console.log(`HTTP health check server running on port ${HTTP_PORT}`);
    })
  })
  .catch((err) => console.log(err))

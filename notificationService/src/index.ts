import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './config/dbConnect'
import grpcConnect from './config/grpcConnect'
import { healthCheck } from './util/healthCheck'
import subscribeToNotificationQueue from './subscriber/subscribeToNotificationQueue'
 

const MONGODB_URI = process.env.NOTIFICATION_DB_URI || ''
const HTTP_PORT = process.env.NOTIFICATION_HEALTH_CHECK_PORT || 8086

// dbConnect(MONGODB_URI)
//   .then(() => {
//     grpcConnect()
//     healthCheck.listen(HTTP_PORT, () => {
//       console.log(`HTTP health check server running on port ${HTTP_PORT}`);
//     })
//   })
//   .catch((err) => console.log(err))

grpcConnect()
subscribeToNotificationQueue()
healthCheck.listen(HTTP_PORT, () => {
  console.log(`HTTP health check server running on port ${HTTP_PORT}`);
})

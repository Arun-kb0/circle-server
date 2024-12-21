import { healthCheck } from './util/healthCheck'
import connectDB from './config/dbConnect'
import grpcConnect  from './config/grpcConnect'


const MONGODB_URI = process.env.USER_DB_URI || 'mongodb+srv://arun11kb:o7DNRY2oTPIytb7D@cluster0.nlbom.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0'
const HTTP_PORT = process.env.HEALTH_CHECK_PORT || 8081


connectDB(MONGODB_URI)
  .then(() => {
    grpcConnect()
    healthCheck.listen(HTTP_PORT, () => {
      console.log(`HTTP health check server running on port ${HTTP_PORT}`);
    })
  })
  .catch((err) => console.log(err))
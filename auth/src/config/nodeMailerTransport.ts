import nodeMailer from 'nodemailer'

console.log("smtp host = ", process.env.SMTP_HOST)
const nodeMailerTransport = nodeMailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
})

export default nodeMailerTransport
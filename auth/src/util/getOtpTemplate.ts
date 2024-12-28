const getOtpTemplate = () => {
  const otp = `${Math.floor(1000 + Math.random() * 9000)}`
  const otpHtmlTemplate = `
    <table style="background-color: #222; color: whitesmoke; display: flex; flex-direction: column; align-items: center; justify-content: center;" >
    <ul>
    <ul><h3 style="color:#2c67f2;">Circle</h3> </ul>
    <ul><h1>${otp}</h1></ul>
    <ul><p>to verify your email address and complete signup to Circle</p></ul>
    <ul><p>This code will expire after 1 minute</p></ul>
    </tbody>
    </table>
    `
  return {otpHtmlTemplate, otp}
} 

export default getOtpTemplate
import express from 'express'
import { adminLogin, adminSignup, login, logout, refresh, resendOtp, signup, verifyEmail } from '../controller/authController'

const router = express.Router()

router.post('/signup', signup)
router.post('/verify-email', verifyEmail)
router.post('/resend-otp', resendOtp)

router.post('/login', login)
router.get('/logout', logout)
router.get('/refresh', refresh)

// * admin
router.post('/admin-signup', adminSignup)
router.post('/admin-login', adminLogin)

export default router
import express from 'express'
import { adminLogin, adminSignup, login, logout, refresh, signup } from '../controller/authController'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.get('/logout', logout)
router.get('/refresh', refresh)

// * admin
router.post('/admin-signup', adminSignup)
router.post('/admin-login', adminLogin)

export default router
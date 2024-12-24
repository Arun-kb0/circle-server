import express from 'express'
import { login, logout, refresh, signup } from '../controller/authController'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.get('/logout', logout)
router.get('/refresh', refresh)

export default router
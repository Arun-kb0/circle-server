import express from 'express'
import { getAllPosts } from '../controller/postController'

const router = express.Router()

router.get('/all', getAllPosts)


export default router
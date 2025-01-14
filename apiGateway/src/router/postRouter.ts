import express, { NextFunction, Request, Response } from 'express'
import { createPost, deletePost, getAllPosts, updatePost } from '../controller/postController'
import multer from 'multer'
import { MulterRequest } from '../constants/types'

const router = express.Router()
const upload = multer({
  dest: '/uploads',
  limits: { fileSize: 10 * 1024 * 1024 }
})


router.get('/all', getAllPosts)
router.route('/')
  .post(upload.array('files'), createPost)
  .patch(upload.array('files'), updatePost)
router.delete('/:postId', deletePost)

export default router


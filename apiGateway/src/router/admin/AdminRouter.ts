import express from 'express'
import { updatePost, searchPosts, deletePost } from '../../controller/admin/postAdminController'
import { getAllUsers, blockUser, unblockUser } from '../../controller/admin/userAdminController'
import authorizeAdmin from '../../middleware/authorizeAdmin'

const router = express.Router()

// * admin authorization middleware
router.use(authorizeAdmin)

// * user
router.get('/user/all', getAllUsers)
router.post('/user/block', blockUser)
router.post('/user/unblock', unblockUser)

// * post
router.get('/post/search-post', searchPosts)
router.route('/post/:postId')
  .patch(updatePost)
  .delete(deletePost)


export default router


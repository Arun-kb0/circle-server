import express from "express";
import {
  blockUser, followUser, getAllUsers,
  getFollowers,
  getSuggestedPeople,
  getUser, unblockUser, unFollowUser, updateUser
} from "../controller/UserController";


const router = express.Router()


router.get('/all', getAllUsers)
router.patch('/', updateUser)

// * accessible only to admins
router.post('/block', blockUser)
router.post('/unblock', unblockUser)

// * follow
router.post('/follow', followUser)
router.post('/unfollow', unFollowUser)
router.get('/followers', getFollowers)
router.get('/suggested-people', getSuggestedPeople)

// * route with params
router.get('/:userId', getUser)

export default router
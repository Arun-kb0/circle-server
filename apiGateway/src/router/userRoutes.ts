import express from "express";
import {
  blockUser, followUser, getAllUsers,
  getFollowers,
  getFollowing,
  getLiveUsers,
  getSuggestedPeople,
  getUser, unblockUser, unFollowUser, updateUser
} from "../controller/userController";


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
router.get('/following', getFollowing)
router.get('/suggested-people', getSuggestedPeople)
router.get('/live-users', getLiveUsers )

// * route with params
router.get('/:userId', getUser)

export default router
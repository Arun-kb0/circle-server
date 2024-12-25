import express from "express";
import {
  blockUser, getAllUsers,
  getUser, unblockUser, updateUser
} from "../controller/userController";


const router = express.Router()


router.get('/all', getAllUsers)
router.get('/:userId', getUser)
router.patch('/', updateUser)

// * accessible only to admins
router.post('/block',blockUser)
router.post('/unblock',unblockUser)


export default router
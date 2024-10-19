import express from 'express'
import {userLogin, registerUser, getUserProfile} from '../controllers/user.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//register
router.route('/register').post(registerUser)

//Authenticate
router.route('/login').post(userLogin)

//Authorize
router.route('/profile').get(protect, getUserProfile)

// router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)

export default router

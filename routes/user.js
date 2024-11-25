import express from 'express';
import { getAllUsers, login, registerUser, resetPassword, sendOtp, updateAdminStatus, updateUserPassword, verifyOtp, verifyToken } from '../controllers/user.js';
import { authorized } from '../middleware/auth.js';


const router = express.Router();

router.post('/register', registerUser);

router.put('/send/otp', sendOtp)

router.put('/otp/verification', verifyOtp)

router.post('/login', login)

router.put('/password/reset', resetPassword);

router.put("/change/password", updateUserPassword)

router.post("/verify/token", verifyToken)

// admin access
router.get("/get/all", getAllUsers)

router.put("/update/admin-status/:id", updateAdminStatus)

export default router;
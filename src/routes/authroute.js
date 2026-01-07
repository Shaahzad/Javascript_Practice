import express from 'express';
import { forgotPasswordController, getCurrentUser, loginController, logoutController, registerController } from '../controller/Authcontroller.js';
import { authMiddleware } from '../middleware/authentication.js';
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/getcurrentuser", authMiddleware, getCurrentUser);
router.post("/logout", authMiddleware, logoutController);
router.post("/forgotpassword", authMiddleware, forgotPasswordController);


export default router
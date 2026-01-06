import express from 'express';
import { getCurrentUser, loginController, registerController } from '../controller/Authcontroller.js';
import { authMiddleware } from '../middleware/authentication.js';
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/getcurrentuser", authMiddleware, getCurrentUser);


export default router
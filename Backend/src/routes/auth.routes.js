import { Router } from "express";
import { changeForgotPassword, changePassword, createUser, forgotPassword, login, loginGoogle } from "../controllers/auth.controller.js";
import { issueTokenMiddleware, verifyTokenMiddleware } from "../middlewares/login.middleware.js";


const router = Router()

router.post("/", createUser)
router.post("/login", issueTokenMiddleware , login)
router.post("/recovery-password/:email", forgotPassword)
router.post("/change-password/:email", verifyTokenMiddleware, changePassword)
router.post("/change-forgot-password/", changeForgotPassword)
router.post("/google", loginGoogle )




export default router
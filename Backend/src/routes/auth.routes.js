import { Router } from "express";
import { changePassword, createUser, forgotPassword, login } from "../controllers/auth.controller.js";
import { issueTokenMiddleware, verifyTokenMiddleware } from "../middlewares/login.middleware.js";


const router = Router()

router.post("/", createUser)
router.post("/login", issueTokenMiddleware , login)
router.post("/recovery-password/:email", forgotPassword)
router.post("/change-password/:email", verifyTokenMiddleware, changePassword)




export default router
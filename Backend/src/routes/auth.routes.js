import { Router } from "express";
import { createUser } from "../controllers/auth.controller.js";


const router = Router()

router.post("/", createUser)




export default router
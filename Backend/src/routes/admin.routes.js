import { Router } from "express";
import { getAllusers } from "../controllers/admin.controller.js";



const router = Router()

router.get("/", getAllusers)




export default router
import { Router } from "express";
import { changeStateUser, deleteUser, getAllusers, getUserDataById, updateUser } from "../controllers/admin.controller.js";
import { verifyTokenMiddleware } from "../middlewares/login.middleware.js";



const router = Router()

router.get("/",verifyTokenMiddleware, getAllusers) //Listo
router.get("/get-user/:id",verifyTokenMiddleware, getUserDataById) //Listo
router.put("/cambiar-estado",verifyTokenMiddleware, changeStateUser)//Listo
router.put("/update-user",verifyTokenMiddleware, updateUser)//Listo
router.delete("/delete-user/:id",verifyTokenMiddleware, deleteUser)//Listo




export default router
import { Router } from "express";
import { changeStateUser, deleteUser, getAllusers, getUserDataById, updateUser } from "../controllers/admin.controller.js";
import { verifyTokenMiddleware } from "../middlewares/login.middleware.js";
import { verificarAdmin } from "../middlewares/admin.middlewares.js";



const router = Router()

router.get("/",verifyTokenMiddleware,verificarAdmin, getAllusers) //Listo
router.get("/get-user/:id",verifyTokenMiddleware,verificarAdmin, getUserDataById) //Listo
router.put("/cambiar-estado",verifyTokenMiddleware,verificarAdmin, changeStateUser)//Listo
router.put("/update-user",verifyTokenMiddleware,verificarAdmin, updateUser)//Listo
router.delete("/delete-user/:id",verifyTokenMiddleware, verificarAdmin, deleteUser)//Listo




export default router
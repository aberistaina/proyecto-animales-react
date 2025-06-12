import { Router } from "express";
import { changeStateAnimal, createAnimal, deleteAnimal, getAllAnimals, getAllEspecies, getAllRazas, getAnimalById, updateAnimal } from "../controllers/animales.controller.js";
import { verifyTokenMiddleware } from "../middlewares/login.middleware.js";
import { verificarAdmin } from "../middlewares/admin.middlewares.js";

const router = Router()

router.get("/", getAllAnimals)//Listo
router.get("/get-animal/:id",getAnimalById)///listo
router.get("/razas",verifyTokenMiddleware, verificarAdmin, getAllRazas)//Listo
router.get("/especies",verifyTokenMiddleware,verificarAdmin, getAllEspecies)//Listo
router.post("/crear-animal",verifyTokenMiddleware, verificarAdmin,createAnimal)//Listo
router.put("/editar-animal/:id",verifyTokenMiddleware,verificarAdmin, updateAnimal)//Listo
router.put("/cambiar-estado", verifyTokenMiddleware,verificarAdmin, changeStateAnimal)//Listo
router.delete("/eliminar-animal/:id",verifyTokenMiddleware, verificarAdmin, deleteAnimal)//Listo


export default router
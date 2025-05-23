import { Router } from "express";
import { changeStateAnimal, createAnimal, deleteAnimal, getAllAnimals, getAllEspecies, getAllRazas, getAnimalById, updateAnimal } from "../controllers/animales.controller.js";
import { verifyTokenMiddleware } from "../middlewares/login.middleware.js";

const router = Router()

router.get("/", getAllAnimals)//Listo
router.get("/get-animal/:id",getAnimalById)//Pendiente
router.get("/razas",verifyTokenMiddleware, getAllRazas)//Listo
router.get("/especies",verifyTokenMiddleware, getAllEspecies)//Listo
router.post("/crear-animal",verifyTokenMiddleware, createAnimal)//Listo
router.put("/editar-animal/:id",verifyTokenMiddleware, updateAnimal)//Listo
router.put("/cambiar-estado", verifyTokenMiddleware,changeStateAnimal)//Listo
router.delete("/eliminar-animal/:id",verifyTokenMiddleware, deleteAnimal)//Listo


export default router
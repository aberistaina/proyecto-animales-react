import { Router } from "express";
import { changeStateAnimal, createAnimal, deleteAnimal, getAllAnimals, getAllEspecies, getAllRazas, getAnimalById, updateAnimal } from "../controllers/animales.controller.js";

const router = Router()

router.get("/", getAllAnimals)
router.get("/get-animal/:id", getAnimalById)
router.get("/razas", getAllRazas)
router.get("/especies", getAllEspecies)
router.post("/crear-animal", createAnimal)
router.put("/editar-animal/:id", updateAnimal)
router.put("/cambiar-estado", changeStateAnimal)
router.delete("/eliminar-animal/:id", deleteAnimal)


export default router
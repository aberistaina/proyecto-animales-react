import { Router } from "express";
import { crearSolicitudAdopcion } from "../controllers/adopciones.controller.js";



const router = Router()

router.post("/solicitar-adopcion", crearSolicitudAdopcion)




export default router
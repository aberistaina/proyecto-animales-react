import { Router } from "express";
import { crearSolicitudAdopcion, solicitudesById } from "../controllers/adopciones.controller.js";



const router = Router()

router.post("/solicitar-adopcion", crearSolicitudAdopcion)

router.get("/ver-solicitudes/:id", solicitudesById)




export default router
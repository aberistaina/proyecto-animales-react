import { Router } from "express";
import { crearSolicitudAdopcion, getAllSolicitudes, solicitudesById } from "../controllers/adopciones.controller.js";
import { verifyTokenMiddleware } from "../middlewares/login.middleware.js";
import { verificarAdmin } from "../middlewares/admin.middlewares.js";



const router = Router()


router.get("/ver-solicitudes/:id",verifyTokenMiddleware, solicitudesById)
router.get("/get-all",verifyTokenMiddleware, verificarAdmin, getAllSolicitudes)

router.post("/solicitar-adopcion",verifyTokenMiddleware, crearSolicitudAdopcion)


export default router
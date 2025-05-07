import { Adopcion } from "../models/Adopcion.model.js"

export const crearSolicitudAdopcion = async(req, res) =>{
    try {

        const { id_usuario, id_animal } = req.body

        const id = 1

        await Adopcion.create({
            id_usuario: id,
            id_animal,
            estado: "pendiente",
        })

        res.status(201).json({
            code:201,
            message: "Solicitud Creada Con Éxito",
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}
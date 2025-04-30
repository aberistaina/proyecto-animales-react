import { Usuario } from "../models/Usuario.model.js"

export const getAllusers = async(req, res) =>{
    try {
        const usuarios = await Usuario.findAll({
            attributes:["id","nombre", "apellido", "admin"]
        })
        res.status(200).json({
            code:200,
            message: "Usuarios obtenidos con éxito",
            data: usuarios
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}
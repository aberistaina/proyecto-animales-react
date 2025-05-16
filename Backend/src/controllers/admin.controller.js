import { Usuario } from "../models/Usuario.model.js"
import { validateUserData, userIfExist, userNotExist } from "../services/validateUserData.js";
import { sendEmail } from "../services/email.services.js";
import { hashPassword } from "../services/auth.services.js";

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

export const createUser = async(req, res) =>{
    try {

        const { nombre, apellido, email, telefono, password } = req.body

        await userIfExist(email)

        validateUserData(nombre, apellido, email, password, telefono )
        const hash = hashPassword(password)

        await Usuario.create({
            nombre,
            apellido,
            email,
            password: hash,
            telefono
        })
        
        const username = `${nombre} ${apellido}`

        sendEmail( email, "registro", username )

        res.status(201).json({
            code:201,
            message: "Usuario creado con éxito",
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}

export const updateUser = async(req, res, next) =>{
    try {
        const { nombre, apellido, email, telefono } = req.body

        validateUserData(nombre, apellido, email, null, telefono )

        await Usuario.update({ 
            nombre,
            apellido,
            email,
            telefono
        },
        {
            where:{
                email
            }
        }
    )
        res.status(200).json({
            code:200,
            message: "Usuario modificado con éxito",
        })
    } catch (error) {
        next(error)
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}

export const changeStateUser = async(req, res) =>{
    try {
        const { id, estado } = req.body

        const user = await Usuario.findByPk(id)
        console.log(estado);

        if(!user){
            return res.status(404).json({
                code:404,
                message: "El Usuario no existe",
            })
        }

        /* const formatRol = rol === "true" ? true : false */



        await Usuario.update(
            { admin: estado }, {
            where: { id }
        })
        
        res.status(200).json({
            code:200,
            message: "Estado del usuario se ha actualizado con éxito",
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
        
    }
}

export const getUserDataById = async(req, res) =>{
    try {

        const { id } = req.params
        const usuario = await Usuario.findOne({
            raw:true,
            attributes:{exclude: ["password", "admin", "createdAt", "updatedAt"]},
            where:{
                id
            }
        })

        res.status(201).json({
            code:201,
            message: "Usuario Encontrado con éxito",
            data:usuario
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}

export const deleteUser = async(req, res) =>{
    try {

        const { id } = req. params

        await userNotExist(null, id)

        await Usuario.destroy({
            where:{
                id
            }
        })

        res.status(200).json({
            code:200,
            message: "Usuario Eliminado con éxito",
        })
    } catch (error) {
         res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}
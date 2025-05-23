import { AuthenticationError, UnauthorizedError } from "../errors/TypeError.js";
import logger from "../utils/logger.js";
import { comparePassword, createToken, verifyToken } from "../services/auth.services.js";
import { Usuario } from "../models/Usuario.model.js";


export const issueTokenMiddleware = async(req, res, next) =>{
    try {
        const {email, password } = req.body

        let user = await Usuario.findOne({
            attributes: ["id", "nombre", "email", "password", "telefono", "admin" ],
            where:{
                email
            }
        })
        
        if (!user){
            throw new UnauthorizedError("Email o contraseña incorrectos")
        }
        
        const validatePassword = await comparePassword(password, user.password)

        if(!validatePassword){
            throw new UnauthorizedError("Email o contraseña incorrectos")
        }

        const { password: _, ...usuarioSinPassword } = user.toJSON();

        const token = createToken(usuarioSinPassword, "1d")

        req.token = token
        next()

    } catch (error) {
        console.log(error.message)
        logger.error("Ha ocurrido un error en issuetoken Middleware", error)
        next(error);
    } 
}

export const verifyTokenMiddleware = async(req, res, next) =>{

    try {
        
        let {authorization} = req.headers
        let tokenFromQuery = req.query.token
        let token = null

        if(authorization){
            token = authorization.split(" ")[1] 
        }else if(tokenFromQuery){
            token = tokenFromQuery
        }else{
            throw new AuthenticationError("Token no proporcionado")
        }


        const decoded = await verifyToken(token);
        req.user = decoded.data
        next()
        
    } catch (error) {
        console.log(error)
        logger.error("Ha ocurrido un error en authMiddleware Middleware", error)
        next(error);
    }
}
import { ValidationError } from "../errors/TypeError.js";
import { isValidName, isValidEmail, isValidPassword, isValidPhone } from "../utils/validators.js";
import { Usuario } from "../models/Usuario.model.js";

export const validateUserData = (nombre, apellido, email, password=null, telefono) => {

    if (!isValidName(nombre)) {
        throw new ValidationError("El Nombre Proporcionado no cumple con el formato", {
            field: "Nombre",
        });
    }

    if (!isValidName(apellido)) {
        throw new ValidationError("El Apellido Proporcionado no cumple con el formato", {
            field: "Apellido",
        });
    }

    if (!isValidEmail(email)) {
        throw new ValidationError("El Email Proporcionado no es válido", {
            field: "Email",
        });
    }

    if(!password){
        return
    }else{
        if (!isValidPassword(password)) {
            throw new ValidationError("La contraseña debe contener 9 caracteres, 4 letras, 4 números, un caracter especial y como mínimo una mayuscula, una minúscula", {
                field: "Password",
            });
    }
    }
    

    if (!isValidPhone(telefono)) {
        throw new ValidationError("El Teléfono Proporcionado no cumple con el formato", {
            field: "Teléfono",
        });
    }
};

export const userIfExist = async (email) => {
    
    if (email) {
        const userByEmail = await Usuario.findOne({
            where: { email }
        });
        if (userByEmail) {
            throw new ValidationError("Ya existe un usuario registrado con ese Email", {
                field: "email",
            });
        }
    }
}

export const userNotExist = async (email) => {
    
    if (email) {
        const userByEmail = await Usuario.findOne({
            where: { email }
        });
        if (!userByEmail) {
            throw new ValidationError("Usuario no encontrado", {
                field: "email",
            });
        }
    }
}
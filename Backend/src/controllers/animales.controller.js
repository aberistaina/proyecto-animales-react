import { Animal } from "../models/Animal.model.js"
import { Raza } from "../models/Raza.model.js"
import { Especie } from "../models/Especie.model.js"


export const getAllAnimals = async(req, res) =>{
    try {
        const animales = await Animal.findAll({
            include:[
                {
                    model: Especie,
                    as: 'especie',
                },
                {
                    model: Raza,
                    as: 'raza',
                }
            ],
        })

        const animalesMap = animales.map(animal =>({
            id: animal.id,
            nombre: animal.nombre,
            edad: animal.edad,
            descripcion: animal.descripcion,
            estado: animal.estado,
            especie:animal.especie?.nombre || "Sin especie",
            raza: animal.raza?.nombre || "Sin raza",
            imagen: animal.imagen
        }))

        
        res.status(200).json({
            code:200,
            message: "animales obtenidos con éxito",
            data: animalesMap
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}

export const getAnimalById = async(req, res) =>{
    try {

        const { id } = req.params
        const animal = await Animal.findOne({
            where:{ id }
        })
        res.status(200).json({
            code:200,
            message: "Animal encontrado con éxito",
            data: animal
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}

export const createAnimal = async(req, res )=>{
    try {
        const { nombre, edad, descripcion, especie, raza } = req.body
        const nuevoAnimal = await Animal.create({
            nombre,
            edad,
            descripcion,
            estado: "disponible",
            id_especie: especie,
            id_raza: raza
        })

        res.status(201).json({
            code:201,
            message: "Animal creado con éxito",
            data: nuevoAnimal
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
        
    }
}

export const updateAnimal = async(req, res )=>{
    try {
        const { nombre, edad, descripcion, especie, raza } = req.body
        const { id } = req.params

        await Animal.update(
            {
                nombre,
                edad,
                descripcion,
                estado: "disponible",
                id_especie: especie,
                id_raza: raza
            },
            {
                where: { 
                    id 
                }
            }
        );
        
        

        res.status(201).json({
            code:201,
            message: "Animal modificado con éxito",
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
        
    }
}

export const changeStateAnimal = async(req, res) =>{
    try {
        const { id, estado } = req.body
        
        const animal = await Animal.findByPk(id)

        if(!animal){
            return res.status(404).json({
                code:404,
                message: "El animal no existe",
            })
        }

        await Animal.update({ estado }, {
            where: { id }
        })
        
        res.status(200).json({
            code:200,
            message: "Estado del animal actualizado con éxito",
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
        
    }
}

export const deleteAnimal = async(req, res) =>{
    try {
        const { id } = req.params

        const animal = await Animal.findByPk(id)

        if(!animal){
            return res.status(404).json({
                code:404,
                message: "El animal no existe en la base de datos",
            })
        }

        await Animal.destroy({
            where: { id }
        })

        res.status(200).json({
            code:200,
            message: "Animal eliminado con éxito",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
        
    }

}

export const getAllEspecies = async(req, res) =>{
    try {
        const especies = await Especie.findAll()

        res.status(200).json({
            code:200,
            message: "Especies obtenidas con éxito",
            data: especies
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}

export const getAllRazas = async(req, res) =>{
    try {
        const razas = await Raza.findAll()

        res.status(200).json({
            code:200,
            message: "Especies obtenidas con éxito",
            data: razas
        })
    } catch (error) {
        res.status(500).json({
            code:500,
            message: "Hubo un error interno en el servidor",
            
        })
    }
}
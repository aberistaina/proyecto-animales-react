import { useState, useEffect } from "react";
import { AnimalTable } from "./components/AnimalTable";

export const AnimalAdminPanelPage = () => {
    const [animales, setAnimales] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [razas, setRazas] = useState([])
    const [especies, setEspecies] = useState([])

    const getAnimales = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/v1/animales"
            );
            const data = await response.json();
            if (data.code === 200) {
                setAnimales(data.data);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getAllAnimales = async () => {
            try {
                await getAnimales();
            } catch (error) {
                console.log(error);
            }
        };
        getAllAnimales();
    }, [animales]);

    useEffect(() => {
        const getRazas = async () => {
            const response = await fetch("http://localhost:3000/api/v1/animales/razas")
            const data = await response.json()
            setRazas(data.data)
        }
        getRazas()
        
        const getEspecies = async () => {
            const response = await fetch("http://localhost:3000/api/v1/animales/especies")
            const data = await response.json()
            setEspecies(data.data)
        }
        getEspecies()
    
    }, [])
    
    return (
        <>
            <AnimalTable animales={animales} setIsOpen={setIsOpen} isOpen={isOpen} razas={razas} especies={especies} />
        </>
    );
};

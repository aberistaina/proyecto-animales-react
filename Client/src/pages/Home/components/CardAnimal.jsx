import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardAnimal = () => {
    const [animales, setAnimales] = useState([]);

    useEffect(() => {
        const getAnimalData = async () => {
            try {
                const url = `http://localhost:3000/api/v1/animales/`;
                const response = await fetch(url);
                const data = await response.json();
                setAnimales(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAnimalData();
    }, []);

    return (
        <div className="flex justify-center gap-7 mt-5">
            {animales &&
                animales.map((animal) => (
                    <div className="min-w-[300px] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
                    key={animal.id}
                    >
                        <img
                            src={`http://localhost:3000/${animal.imagen}`}
                            alt={`Foto de ${animal.nombre}`}
                            className="w-full h-80 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-center font-bold text-gray-800">
                                <Link to={`/detalle-animal/${animal.id}`}>
                                    {animal.nombre}
                                </Link>
                            </h2>
                            <p className="text-sm text-gray-500 mb-2 italic">
                                {animal.especie} - {animal.raza}
                            </p>
                            <p className="text-sm text-gray-700 mb-2">
                                Edad: {animal.edad}
                            </p>
                            <p className="text-sm text-gray-700 mb-2">
                                Estado:{" "}
                                <span className="font-medium">
                                    {animal.estado}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                {animal.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { CreateButton } from "./CreateButton";
import { ModalCrear } from "./ModalCrear"

export const AnimalTable = ({ animales, setIsOpen, isOpen, razas, especies }) => {
    const [animalList, setAnimalList] = useState([]);
    const [ animalSeleccionado, setAnimalSeleccionado ] = useState("")
    const [ modo, setModo ] = useState("")
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setAnimalList(animales);
    }, [animales]);

    const handleChange = async(e, animalID) => {
        const nuevoEstado = e.target.value;

        setAnimalList((prev) =>
            prev.map((animal) =>
                animal.id === animalID
                    ? { ...animal, estado: nuevoEstado }
                    : animal
            )
        );

        const formData = new FormData()
        formData.append("id", animalID);
        formData.append("estado", nuevoEstado);

        const requestOptions = {
            method: "PUT",
            body: formData
        }
        const url = "http://localhost:3000/api/v1/animales/cambiar-estado"
        const response = await fetch(url, requestOptions)
        const data = await response.json()

        if (data.code === 200) {
            enqueueSnackbar(data.message, { variant: "success" });
        } else {
            enqueueSnackbar(data.message, { variant: "error" });
        }
    };

    const handleDelete = async(animalID) => {
        try {
            const formData = new FormData()
            formData.append("id", animalID);

            const requestOptions = {
                method: "delete",
            }
            console.log(requestOptions);
            const url = `http://localhost:3000/api/v1/animales/eliminar-animal/${animalID}`
            const response = await fetch(url, requestOptions)
            const data = await response.json()
    
            if (data.code === 200) {
                enqueueSnackbar(data.message, { variant: "success" });
            } else {
                enqueueSnackbar(data.message, { variant: "error" });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async(id)=>{
        try {
            setIsOpen(true)
            setModo("modificar")
            setAnimalSeleccionado(id)
            console.log(id);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            {isOpen && <ModalCrear setIsOpen={setIsOpen} razas={razas} especies={especies} modo={modo} animalSeleccionado={animalSeleccionado}/>}
            <div className="flex justify-start mt-5 ms-[10%]">
                <CreateButton setIsOpen={setIsOpen} setModo={setModo} />
            </div>
            <div className="flex justify-center mt-5">
                <table className="w-[80%] divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Edad
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Especie
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Raza
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Estado
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {animalList.map((animal) => (
                            <tr key={animal.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {animal.nombre}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {animal.edad} años
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {animal.especie}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {animal.raza}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    <select
                                        className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm text-sm px-2 py-2"
                                        value={animal.estado}
                                        onChange={(e) => handleChange(e, animal.id)}
                                    >
                                        <option value="Disponible">Disponible</option>
                                        <option value="Adoptado">Adoptado</option>
                                    </select>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-800">
                                    <div className="flex justify-center items-center min-h-full">
                                        <button className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-600 transition duration-200"
                                        onClick={(e) => handleUpdate(animal.id)}
                                        >
                                            Modificar
                                        </button>
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-800">
                                    <div className="flex justify-center items-center min-h-full">
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200" 
                                            onClick={() => handleDelete(animal.id)}>
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

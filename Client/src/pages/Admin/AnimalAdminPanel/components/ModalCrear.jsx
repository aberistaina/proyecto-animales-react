import { useState } from "react";
import { useSnackbar } from "notistack";

export const ModalCrear = ({ setIsOpen, razas, especies }) => {

    const [form, setForm] = useState({
        nombre: "",
        edad: "",
        descripcion: "",
        especie: "",
        raza: "",
    });
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        try {
            const formData = new FormData()
            formData.append("nombre", form.nombre)
            formData.append("edad", form.edad)
            formData.append("descripcion", form.descripcion)
            formData.append("especie", form.especie)
            formData.append("raza", form.raza)

            const requestOptions = {
                method: "POST",
                body: formData
            }
            const url = "http://localhost:3000/api/v1/animales/crear-animal"
            const response = await fetch(url, requestOptions)
            const data = await response.json()

            if (data.code === 201) {
                enqueueSnackbar(data.message, { variant: "success" });
                setIsOpen(false)
            } else {
                enqueueSnackbar(data.message, { variant: "error" });
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Crear Nuevo Animal</h2>
                    <div className="space-y-3" >
                        <input
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                        <input
                            name="edad"
                            value={form.edad}
                            onChange={handleChange}
                            placeholder="Edad"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                        <input
                            name="descripcion"
                            value={form.descripcion}
                            onChange={handleChange}
                            placeholder="Descripción"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                        <div className="flex flex-col gap-2">
                            <select
                                className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm text-sm px-2 py-2"
                                onChange={handleChange}
                                name="especie"
                                value={form.especie}
                            >
                                <option value="">Seleccionar Especie</option>
                                {especies.map((especie) => (
                                    <option key={especie.id} value={especie.id}>
                                        {especie.nombre}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm text-sm px-2 py-2"
                                onChange={handleChange}
                                name="raza"
                                value={form.raza}
                            >
                                <option value="">Seleccionar Raza</option>
                                {razas.map((raza) => (
                                    <option key={raza.id} value={raza.id}>
                                        {raza.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end mt-5 gap-2">
                        <button
                            className="px-4 py-2 bg-gray-200 rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                            onClick={handleSubmit}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
)}


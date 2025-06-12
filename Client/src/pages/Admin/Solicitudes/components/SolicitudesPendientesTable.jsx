import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

export const SolicitudesPendientesTable = ({ solicitudes }) => {
    const { token } = useSelector((state) => state.auth);
    const { enqueueSnackbar } = useSnackbar();

    const handleRechazar = async (animalID) => {
        try {
            const formData = new FormData();
            formData.append("id", animalID);

            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "delete",
                headers: myHeaders,
            };

            const url = `http://localhost:3000/api/v1/animales/eliminar-animal/${animalID}`;
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            if (data.code === 200) {
                enqueueSnackbar(data.message, { variant: "success" });
            } else {
                enqueueSnackbar(data.message, { variant: "error" });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleAprobar = async (animalID) => {
        try {
            const formData = new FormData();
            formData.append("id", animalID);

            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            const requestOptions = {
                method: "delete",
                headers: myHeaders,
            };

            const url = `http://localhost:3000/api/v1/animales/eliminar-animal/${animalID}`;
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            if (data.code === 200) {
                enqueueSnackbar(data.message, { variant: "success" });
            } else {
                enqueueSnackbar(data.message, { variant: "error" });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex justify-center mt-5">
                <table className="w-[80%] divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Nombre Solicitante
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Nombre Animal
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Especie
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Estado
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Fecha Solicitud
                            </th>
                            <th className="px-6 py-3  text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                <div className="flex justify-center items-center">
                                    <MdOutlineCancel className="text-2xl" fill="#cf0e0e" />
                                </div>
                            </th>
                            <th className="px-6 flex justify-center py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                <div className="flex justify-center items-center">
                                    <FaRegCircleCheck className="text-xl" fill="#10ad06"/>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {solicitudes &&
                            solicitudes
                                .filter(
                                    (solicitud) =>
                                        solicitud.estado == "pendiente"
                                )
                                .map((solicitud) => (
                                    <tr
                                        key={solicitud.id}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-800">
                                            {solicitud.nombre_usuario}{" "}
                                            {solicitud.apellido_usuario}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800">
                                            {solicitud.nombre_animal}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800">
                                            {solicitud.especie_animal}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800">
                                            {solicitud.estado}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800">
                                            {solicitud.fecha_solicitud}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-800">
                                            <div className="flex justify-center items-center min-h-full">
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                                                    onClick={() =>
                                                        handleDelete(animal.id)
                                                    }
                                                >
                                                    Rechazar
                                                </button>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-800">
                                            <div className="flex justify-center items-center min-h-full">
                                                <button
                                                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                                                    onClick={() =>
                                                        handleDelete(animal.id)
                                                    }
                                                >
                                                    Aprobar
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

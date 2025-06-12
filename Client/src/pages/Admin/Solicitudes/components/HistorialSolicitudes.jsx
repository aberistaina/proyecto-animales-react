
import { useSelector } from "react-redux";

export const HistorialSolicitudes = ({ solicitudes }) => {
    const { token } = useSelector((state) => state.auth);

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
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {solicitudes && solicitudes.filter((solicitud) => solicitud.estado !== "pendiente").map((solicitud) => (
                            <tr key={solicitud.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {solicitud.nombre_usuario} {solicitud.apellido_usuario}
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
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const MyAccountTable = ({ solicitudes }) => {

    
    return (
        <>
            {solicitudes && solicitudes.length === 0 && 
            <div className="text-center">
                <h1>Usted No Tiene Solicitudes Realizadas</h1>
            </div>}
            {solicitudes && <div className="flex justify-center mt-5">
                <table className="w-[80%] divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Nombre Animal
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
                                Fecha Solicitud
                            </th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {solicitudes.map((solicitud) => (
                            <tr
                                key={solicitud.id_solicitud}
                                className="hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {solicitud.nombre_animal}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {solicitud.edad_animal} años
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {solicitud.especie}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {solicitud.raza}
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
            </div>}
        
        </>
    );
};

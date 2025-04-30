import { useState, useEffect } from "react";

export const UserTable = ({ users }) => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        setUsersData(users);
    }, [users]);

    const handleChange = (e, userID) => {
        const nuevoRol = e.target.value === "Administrador";
    
        setUsersData((prev) =>
            prev.map((user) =>
                user.id === userID ? { ...user, rol: nuevoRol } : user
            )
        );
    };
    

    return (
        <div className="flex justify-center mt-5">
            <table className="w-[50%] divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            Apellido
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            Rol
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {usersData.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                {user.nombre}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                {user.apellido}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                <select
                                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm text-sm px-2 py-2"
                                    value={user.rol ? "Administrador" : "Usuario"}
                                    onChange={(e) => handleChange(e, user.id)}
                                >
                                    <option value="Administrador">Administrador</option>
                                    <option value="Usuario">Usuario</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

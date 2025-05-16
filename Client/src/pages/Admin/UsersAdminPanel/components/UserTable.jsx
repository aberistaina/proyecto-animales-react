import { useState, useEffect } from "react";
import { CreateUserButton } from "./CreateUserButton";
import { useSnackbar } from "notistack";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const UserTable = ({ users, setUsers, setIsOpenUserModal, setModo, handleUpdate }) => {

    const { enqueueSnackbar } = useSnackbar();


    const handleDelete = async(id) => {
        try {

            const requestOptions = {
                method: "DELETE"
            }
            const response = await fetch(`http://localhost:3000/api/v1/admin/delete-user/${id}`, requestOptions)
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

     const handleChange = async(e, userID) => {
        const nuevoRol = e.target.value === "Administrador";
    
        setUsers((prev) =>
            prev.map((user) =>
                user.id === userID ? { ...user, rol: nuevoRol } : user
            )
        );

        const formData = new FormData()
        formData.append("id", userID);
        formData.append("estado", nuevoRol);

        const requestOptions = {
            method: "PUT",
            body: formData
        }
        const url = "http://localhost:3000/api/v1/admin/cambiar-estado"
        const response = await fetch(url, requestOptions)
        const data = await response.json()

        if (data.code === 200) {
            enqueueSnackbar(data.message, { variant: "success" });
        } else {
            enqueueSnackbar(data.message, { variant: "error" });
        }

        
    };
    

    return (
        <div>
            <div className="w-[57%] flex justify-center">
                <CreateUserButton setIsOpenUserModal={setIsOpenUserModal} setModo={setModo}/>
            </div>
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
                            <th className="px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">
                                <div className="flex justify-center">
                                    <FaEdit fill="#05a975" className="text-xl" />
                                </div>
                            </th>

                            <th className="px-6 py-3 items-center text-sm font-medium text-gray-600 uppercase tracking-wider">
                                <div className="flex justify-center">
                                    <MdDelete fill="#cd0805" className="text-xl"/>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
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
                                        name="admin"
                                        value={user.admin ? "Administrador" : "Usuario"}
                                        onChange={(e) => handleChange(e, user.id)}
                                    >
                                        <option value="Administrador">Administrador</option>
                                        <option value="Usuario">Usuario</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    <div className="flex justify-center items-center min-h-full">
                                        <button className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-600 transition duration-200"
                                        onClick={(e) => handleUpdate(user.id)}
                                        >
                                            Modificar
                                        </button>
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-800">
                                    <div className="flex justify-center items-center min-h-full">
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200" 
                                            onClick={() => handleDelete(user.id)}>
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

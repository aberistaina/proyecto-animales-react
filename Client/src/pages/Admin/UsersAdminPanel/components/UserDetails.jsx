import { useState } from "react";
import { useSelector } from "react-redux"
import PulseLoader from "react-spinners/PulseLoader";

export const UserDetails = () => {
    const { usuario } = useSelector((state) => state.auth)

    

    return (
        <>
            { !usuario && <PulseLoader color="#156b4d" size={10} />}
            { usuario && (
                <div className="flex justify-center mt-5">
                <div className="max-w-md w-full bg-white shadow-md rounded-lg border p-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src={`https://robohash.org/${usuario.nombre}`}
                            alt="Avatar del usuario"
                            className="w-20 h-20 rounded-full object-cover border"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {usuario.nombre}
                            </h2>
                            <p className="text-sm text-gray-600">Rol: {usuario.admin === true ? "Admin" : "Usuario"}</p>
                            <p className="text-sm text-gray-500">
                                Email: {usuario.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};

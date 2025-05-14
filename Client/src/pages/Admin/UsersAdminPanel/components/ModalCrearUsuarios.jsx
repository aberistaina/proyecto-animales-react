import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { RegisterForm } from "../../../Auth/RegisterView/components/RegisterForm";

export const ModalCrearUsuarios = ({setIsOpenUserModal, modo, usuarioSeleccionado}) => {

    return (
            <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white flex justify-center items-center flex-col p-6 rounded-lg w-full max-w-md shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">{modo === "crear" ? "Crear Nuevo Usuario" : "Modificar Usuario"}</h2>
                    <RegisterForm modo={modo} setIsOpenUserModal={setIsOpenUserModal} usuarioSeleccionado={usuarioSeleccionado}/>
                </div>
                
            </div>
)}


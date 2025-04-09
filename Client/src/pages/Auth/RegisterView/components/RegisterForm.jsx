import { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useSnackbar } from "notistack";

export const RegisterForm = () => {

    const [ showPassword, setShowPassword ] = useState(false)
    const { enqueueSnackbar } = useSnackbar()
    const [ registerForm, setRegisterForm ] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password:"",
        repeatPassword: "",
        telefono: ""
    })

    const [ errors, setErrors ] = useState({
        nombre: false,
        apellido: false,
        email: false,
        password:false,
        repeatPassword: false,
        telefono: false
    })

    const handleChange = (e) =>{
        const { name, value } = e.target
        setRegisterForm({...registerForm, [name]: value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const formData = new FormData()
            formData.append("nombre", registerForm.nombre)
            formData.append("apellido", registerForm.apellido)
            formData.append("email", registerForm.email)
            formData.append("password", registerForm.password)
            formData.append("telefono", registerForm.telefono)

            const url = "http://localhost:3000/api/v1/auth"
            const requestOptions = {
                method: "POST",
                body: formData
            }

            const response = await fetch(url, requestOptions)
            const data = await response.json()
            
            if(data.code === 201){
                enqueueSnackbar(data.message, { variant: "success"})
            }else{
                enqueueSnackbar(data.message, { variant: "error"})
            }
        } catch (error) {
            console.log(error);
        }

    }


  return (
    <>
        <form className="space-y-4 w-1/4 mt-8" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center space-x-4">
            <FaUserAstronaut />
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    value={registerForm.nombre}
                    onChange={handleChange}
                    className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                />
            </div>
            <span className={`ms-9 text-red-600 font-semibold ${errors.nombre ? "block" : "hidden"}`}>
                El nombre debe contener mínimo 2 caracteres
            </span>

            <div className="flex justify-center items-center space-x-4">
            <FaUserAstronaut />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Ingresa tu Apellido"
                    value={registerForm.apellido}
                    onChange={handleChange}
                    className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                />
            </div>
            <span className={`ms-9 text-red-600 font-semibold ${errors.nombre ? "block" : "hidden"}`}>
                El nombre debe contener mínimo 2 caracteres
            </span>

            <div className="flex justify-center items-center space-x-4">
                <MdEmail />
                <input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu Email"
                    value={registerForm.email}
                    onChange={handleChange}
                    className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                />
            </div>
            <span className={`ms-9 text-red-600 font-semibold ${errors.nombre ? "block" : "hidden"}`}>
                El nombre debe contener mínimo 2 caracteres
            </span>

            <div className="flex justify-center items-center space-x-4">
                {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} /> 
                : 
                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />}
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Ingresa tu Password"
                    value={registerForm.password}
                    onChange={handleChange}
                    className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                />
            </div>
            <span className={`ms-9 text-red-600 font-semibold ${errors.nombre ? "block" : "hidden"}`}>
                El nombre debe contener mínimo 2 caracteres
            </span>

            <div className="flex justify-center items-center space-x-4">
                {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} /> 
                : 
                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />}  
                <input
                    type={showPassword ? "text" : "password"}
                    name="repeatPassword"
                    placeholder="Repite tu Password"
                    value={registerForm.repeatPassword}
                    onChange={handleChange}
                    className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                />
            </div>
            <span className={`ms-9 text-red-600 font-semibold ${errors.nombre ? "block" : "hidden"}`}>
                El nombre debe contener mínimo 2 caracteres
            </span>

            <div className="flex justify-center items-center space-x-4">
                <MdOutlinePhoneIphone />
                <input
                    type="text"
                    name="telefono"
                    placeholder="Ingresa tu Teléfono"
                    value={registerForm.telefono}
                    onChange={handleChange}
                    className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                />
            </div>
            <span className={`ms-9 text-red-600 font-semibold ${errors.nombre ? "block" : "hidden"}`}>
                El nombre debe contener mínimo 2 caracteres
            </span>

            <div className="flex justify-center w-full">
                <button type="submit"
                className="px-4 py-2 rounded-lg font-semibold text-slate-200 bg-blue-600 hover:bg-blue-900 transform hover:scale-110 ease-in-out"
                >
                    Registrarme
                </button>
            </div>
        
        </form>
    </>
  )
}

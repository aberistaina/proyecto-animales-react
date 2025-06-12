import { useSnackbar } from "notistack";
import { useState } from "react";
import { isValidPassword } from "../../../../utils/validators";
import { useSearchParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const ChangePasswordForm = () => {
    const [params] = useSearchParams();
    const { enqueueSnackbar } = useSnackbar();
    const [showPassword, setShowPassword] = useState(false);
    const [passwords, setPasswords] = useState({
        password: "",
        repeatPassword: "",
    });

    const email = params.get("email");
    const token = params.get("token");

    const [errors, setErrors] = useState({
        formatPassword: false,
        equalPassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isValidPassword) {
                setErrors.formatPassword(true);
                return;
            }
            if (setPasswords.password != setPasswords.repeatPassword) {
                setErrors.equalPassword(true);
                return;
            }

            const formData = new FormData()
            formData.append("email", email)
            formData.append("token", token)
            formData.append("password", passwords.password)


            const requestOptions = {
                method: "POST",
                body: formData
            };

            const url = `http://localhost:3000/api/v1/auth/change-forgot-password`;
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            if (data.code === 200) {
                enqueueSnackbar(data.message, { variant: "success" });
                localStorage.setItem("token", data.token);
            } else {
                enqueueSnackbar(data.message, { variant: "error" });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Modificar Contraseña
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                        <div className="flex justify-center items-center space-x-4">
                            {showPassword ? (
                                <FaEye
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            ) : (
                                <FaEyeSlash
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            )}
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Ingrese su contraseña"
                                value={passwords.password}
                                onChange={handleChange}
                                required
                            />
                            </div>
                        </div>
                        {errors.formatPassword && (
                            <span className="bg-red-600">
                                La contraseña debe contener 9 caracteres, 4
                                letras, 4 números, un caracter especial y como
                                mínimo una mayuscula, una minúscula
                            </span>
                        )}
                        <div className="mb-6">
                        <div className="flex justify-center items-center space-x-4">
                            {showPassword ? (
                                <FaEye
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            ) : (
                                <FaEyeSlash
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            )}
                            <input
                                type={showPassword ? "text" : "password"}
                                name="repeatPassword"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Repita su contraseña"
                                value={passwords.repeatPassword}
                                onChange={handleChange}
                                required
                            />
                            </div>
                        </div>
                        {errors.equalPassword && (
                            <span className="bg-red-600">
                                Las contraseñas deben ser iguales
                            </span>
                        )}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Cambiar Contrañseña
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

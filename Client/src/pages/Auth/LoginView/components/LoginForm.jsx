import { useState } from "react";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../../store/authSlice";

export const LoginForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/api/v1/auth/login";
            const formData = new FormData()
            formData.append("email", loginForm.email)
            formData.append("password", loginForm.password)

            const requestOptions = {
                method: "POST",
                body: formData
            }
            const response = await fetch(url, requestOptions);
            const data = await response.json()


            if (data.code === 200) {
                enqueueSnackbar(data.message, { variant: "success" });
                dispatch(login(data.token))
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
                        Iniciar Sesión
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Correo Electrónico"
                                value={loginForm.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Contraseña"
                                value={loginForm.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                    <div>
                        <div className="flex justify-center mt-2">
                            <span className="me-2">¿No tienes cuenta? </span>
                            <Link
                                to="/registro"
                                className="underline hover:text-slate-400"
                            >
                                Regístrate Aquí
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                to="/recuperar-contraseña"
                                className="underline hover:text-slate-400"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

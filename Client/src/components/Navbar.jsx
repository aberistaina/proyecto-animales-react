import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaDog } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export const Navbar = () => {
    const { usuario, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="h-12 w-auto"
                            src="https://pbs.twimg.com/profile_images/1039525888730308608/-8viHVUh_400x400.jpg"
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <h4 className="cursor-pointer flex items-center font-bold text-lg text-black transition-all duration-300 hover:text-slate-500 hover:translate-x-1">
                            <NavLink to={"/"} className="flex items-center">
                                <IoIosHome className="mr-2" /> Home
                            </NavLink>
                        </h4>

                        {isAuthenticated && usuario.admin && (<h4 className="cursor-pointer flex items-center font-bold text-lg text-black transition-all duration-300 hover:text-slate-500 hover:translate-x-1">
                            <NavLink
                                to={"/admin/animales"}
                                className="flex items-center"
                            >
                                <FaDog className="mr-2" /> Panel Animales
                            </NavLink>
                        </h4>)}

                        {isAuthenticated && usuario.admin &&(<h4 className="cursor-pointer flex items-center font-bold text-lg text-black transition-all duration-300 hover:text-slate-500 hover:translate-x-1">
                            <NavLink
                                to={"/admin/users"}
                                className="flex items-center"
                            >
                                <RiAdminFill className="mr-2" /> Panel Usuarios
                            </NavLink>
                        </h4>)}

                        {isAuthenticated && (
                            <h4 className="cursor-pointer flex items-center font-bold text-lg text-black transition-all duration-300 hover:text-slate-500 hover:translate-x-1">
                                <NavLink
                                    to={`/mi-cuenta/${usuario?.id}`}
                                    className="flex items-center"
                                >
                                    <GoPersonFill className="mr-2" /> Mi Cuenta
                                </NavLink>
                            </h4>
                        )}

                        {!isAuthenticated && (
                            <h4 className="cursor-pointer flex items-center font-bold text-lg text-black transition-all duration-300 hover:text-slate-500 hover:translate-x-1">
                                <NavLink
                                    to={"/login"}
                                    className="flex items-center"
                                >
                                    <GoPersonFill className="mr-2" /> Login
                                </NavLink>
                            </h4>
                        )}

                        {isAuthenticated && (
                            <h4 className="cursor-pointer flex items-center font-bold text-lg text-black transition-all duration-300 hover:text-slate-500 hover:translate-x-1">
                                <NavLink
                                    to={"/"}
                                    className="flex items-center"
                                    onClick={() => dispatch(logout())}
                                >
                                    <GoPersonFill className="mr-2" /> Logout
                                </NavLink>
                            </h4>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/Home/components/HomePage";
import { RegisterPage } from "./pages/Auth/RegisterView/RegisterPage";
import { LoginPage } from "./pages/Auth/LoginView/LoginPage";
import { RecoveryPasswordPage } from "./pages/Auth/RecoveryPassword/RecoveryPasswordPage";
import { ChangePasswordPage } from "./pages/Auth/ChangePassword/ChangePasswordPage";
import { UserAdminPanelPage } from "./pages/Admin/UsersAdminPanel/UserAdminPanelPage";
import { AnimalAdminPanelPage } from "./pages/Admin/AnimalAdminPanel/AnimalAdminPanelPage";
import { DetalleAnimal } from "./pages/DetalleAnimal/DetalleAnimal";
import { Navbar } from "./components/Navbar";
import { setAuthFromStorage } from "./store/authSlice";
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { MyAcountPage } from "./pages/MyAccount/MyAcountPage";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { UnauthorizedPage } from "./pages/Unauthorized/UnauthorizedPage";
import { SolicitudesPage } from "./pages/Admin/Solicitudes/SolicitudesPage";

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAuthFromStorage())
    }, [])

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/*Rutas No Protegidas */}
                
                <Route path="/" element={<HomePage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/recovery-password" element={<RecoveryPasswordPage />} />
                <Route path="/change-password" element={<ChangePasswordPage />} />

                {/*Rutas Que Requieren Autenticación */}
                <Route element={ <ProtectedRoutes />}>
                    <Route path="/detalle-animal/:id" element={<DetalleAnimal />} />
                    <Route path="/mi-cuenta/:id" element={<MyAcountPage />} />
                </Route>

                {/*Rutas Administrador */}
                <Route element={ <ProtectedRoutes admin={true} />}>
                    <Route path="/admin/users" element={<UserAdminPanelPage />} />
                    <Route path="/admin/animales" element={<AnimalAdminPanelPage />} />
                    <Route path="/admin/solicitudes" element={<SolicitudesPage />} />
                </Route>

                <Route path="/unauthorized" element={<UnauthorizedPage />} />
                <Route path="*" element={<Navigate to="/" />} />
                
            </Routes>
        </BrowserRouter>
    );
};

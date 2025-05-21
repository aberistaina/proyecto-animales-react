import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoutes = ({admin}) => {

    const { isAuthenticated, usuario } = useSelector((state) => state.auth);

    if(!isAuthenticated) return <Navigate to="/login" replace />

    if(admin && admin !== usuario.admin) return <Navigate to="/unauthorized" replace />

    return <Outlet />
    
}

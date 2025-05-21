import { Link } from "react-router-dom"

export const UnauthorizedPage = () => {
  return (
    <div className="min-h-scree flex flex-col items-center justify-center bg-gray-100 px-5 border border-gray-600">
        <div className="bg-white p-8 shadow-md text-center max-w-full">
            <h1 className="text-4xl font-bold text-red-600 mb-4">403 - Acceso Denegado</h1>
            <p className="text-black text-lg mb-6">No tienes los permisos suficientes para visitar esta página</p>
            <Link to="/">
                <button className="bg-blue-600 hover:bg-blue-900 text-white py-2 px-4 rounded-md transitio duration-300 scale-110">Volver Al Inicio</button>
            
            </Link>
        </div>
    </div>
  )
}

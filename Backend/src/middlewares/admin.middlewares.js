export const verificarAdmin = (req, res, next) => {
    const usuario = req.user
    if(!usuario || !usuario.admin) {
        return res.status(403).json({
            code: 403,
            message: "Acceso denegado. Se requiere privilegios de administrador."
        });
    }else{
        next();
    }
}
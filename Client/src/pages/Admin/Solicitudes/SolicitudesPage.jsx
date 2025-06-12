import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SolicitudesPendientesTable } from "./components/SolicitudesPendientesTable";
import { HistorialSolicitudes } from "./components/HistorialSolicitudes";

export const SolicitudesPage = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const { token } = useSelector((state) => state.auth);

    
    const getAllSolicitudes = async () => {
        
        try {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            const requestOptions = {
                method: "get",
                headers: myHeaders
            };
            const url = `http://localhost:3000/api/v1/adopciones/get-all`;
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            
            if (data.code === 200) {
                setSolicitudes(data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getSolicitudes = async () => {
            try {
                await getAllSolicitudes();
            } catch (error) {
                console.log(error);
            }
        };
        getSolicitudes();
    }, []);

    
    return (
        <>
            {<SolicitudesPendientesTable getAllSolicitudes={getAllSolicitudes}  solicitudes={solicitudes}/>}
            <HistorialSolicitudes solicitudes={solicitudes} />
        </>
    );
}

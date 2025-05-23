import { MyAccountTable } from "./components/MyAccountTable"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { UserDetails } from "../Admin/UsersAdminPanel/components/UserDetails"
import { useSelector } from "react-redux";


export const MyAcountPage = () => {
    const { id } = useParams()
    const [ solicitudes, setSolicitudes ] = useState([])
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        const getSolicitudes = async() =>{
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            const requestOptions = {
                method: "GET",
                headers: myHeaders
            }
            const response = await fetch(`http://localhost:3000/api/v1/adopciones/ver-solicitudes/${id}`, requestOptions)
            const data = await response.json()
            setSolicitudes(data.data)
        }
        getSolicitudes()

    }, [])
    


  return (
    <>
        <UserDetails />
        <MyAccountTable solicitudes ={solicitudes} />
    </>
    
  )
}

import { MyAccountTable } from "./components/MyAccountTable"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { UserDetails } from "../Admin/UsersAdminPanel/components/UserDetails"


export const MyAcountPage = () => {
    const { id } = useParams()
    const [ solicitudes, setSolicitudes ] = useState([])

    useEffect(() => {
        const getSolicitudes = async() =>{
            const response = await fetch(`http://localhost:3000/api/v1/adopciones/ver-solicitudes/${id}`)
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

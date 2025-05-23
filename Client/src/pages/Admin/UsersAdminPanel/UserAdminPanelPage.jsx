import { useEffect, useState } from 'react';
import { UserTable } from './components/UserTable'
import { UserDetails } from './components/UserDetails'
import { ModalCrearUsuarios } from './components/ModalCrearUsuarios';
import { useSelector } from "react-redux";
import PacmanLoader from "react-spinners/PulseLoader";

export const UserAdminPanelPage = () => {
        const [users, setUsers] = useState([]);
        const [isOpenUserModal, setIsOpenUserModal] = useState(false)
        const [modo, setModo ] = useState("")
        const [ usuarioSeleccionado, setUsuarioSeleccionado ] = useState("")
        const { token } = useSelector((state) => state.auth);
        const [ isLoading, setIsLoading ] = useState(true)
    
        const getUsers = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${token}`);

                const requestOptions = {
                method: "GET",
                headers: myHeaders,
                };
                
                const response = await fetch("http://localhost:3000/api/v1/admin", requestOptions);
                const data = await response.json();
                if (data.code === 200) {
                    setUsers(data.data);
                    setIsLoading(false)
                } else {
                    console.log(data.message);
                }
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            const getAllUsers = async () => {
                try {
                    await getUsers();
                } catch (error) {
                    console.log(error);
                }
            };
            getAllUsers();
        }, []);

    const handleUpdate = async(id)=>{
        try {
            setIsOpenUserModal(true)
            setModo("modificar")
            setUsuarioSeleccionado(id)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            
            <UserDetails  />
            
            {
                isLoading ? (<PacmanLoader className='text-center' color="#156b4d" size={10}/>) : (<UserTable setIsOpenUserModal={setIsOpenUserModal} setUsers={setUsers} users={users} setModo={setModo} handleUpdate={handleUpdate}/>)
            }
            
            {isOpenUserModal && <ModalCrearUsuarios modo={modo} usuarioSeleccionado={usuarioSeleccionado} setIsOpenUserModal={setIsOpenUserModal} />}
        </>
    )
}

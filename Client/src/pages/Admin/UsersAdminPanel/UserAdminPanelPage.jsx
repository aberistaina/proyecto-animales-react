import { useEffect, useState } from 'react';
import { UserTable } from './components/UserTable'
import { UserDetails } from './components/UserDetails'
import { ModalCrearUsuarios } from './components/ModalCrearUsuarios';

export const UserAdminPanelPage = () => {
        const [users, setUsers] = useState([]);
        const [isOpenUserModal, setIsOpenUserModal] = useState(false)
        const [modo, setModo ] = useState("")
        const [ usuarioSeleccionado, setUsuarioSeleccionado ] = useState("")
    
        const getUsers = async () => {
            try {
                
                const response = await fetch("http://localhost:3000/api/v1/admin");
                const data = await response.json();
                if (data.code === 200) {
                    setUsers(data.data);
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
            <UserTable setIsOpenUserModal={setIsOpenUserModal} setUsers={setUsers} users={users} setModo={setModo} handleUpdate={handleUpdate}/>
            
            {isOpenUserModal && <ModalCrearUsuarios modo={modo} usuarioSeleccionado={usuarioSeleccionado} setIsOpenUserModal={setIsOpenUserModal} />}
        </>
    )
}

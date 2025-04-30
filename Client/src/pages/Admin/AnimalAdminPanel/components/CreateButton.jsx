import { useState } from "react"
import { ModalCrear } from "./ModalCrear"
import { useEffect } from "react"


export const CreateButton = ({ setIsOpen}) => {
    
    
  return (
    <>
        
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
            onClick={() => {setIsOpen(true)}}
            >
                Crear Animal
            </button>
        </div>
    </>
  )
}

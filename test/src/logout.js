import React from 'react'
import {  useNavigate } from "react-router-dom";



const Logout = () => {
const navigate = useNavigate();

const onLogoutButton = ()=>{
navigate("/")
}

  return (
    <div className='h-40 bg-blue-300 flex flex-row justify-end'>
        <button type="button" onClick={onLogoutButton} className="bg-blue-500 my-2 py-2 pb-4 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-4 rounded">LogOut</button>
    </div>
  )
}

export default Logout
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SideBar = () => {

  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem("auth")
    navigate("/")
    toast.warn("Siz tizimdan chiqib ketdingiz")
  }
  return (
    <ul className='fixed top-0 left-0 flex flex-col gap-5 h-screen bg-gray-800 max-w-[270px] w-full p-5'>
        <li className='w-full'>
            <Link className='w-full text-center inline-block bg-gray-500 p-[10px] rounded-xl text-white text-[22px]' to="/teachers">Teachers</Link>
        </li>
        <li className='w-full'>
            <Link className='w-full text-center inline-block bg-gray-500 p-[10px] rounded-xl text-white text-[22px]' to="/students">Students</Link>
        </li>
        <li className='w-full'>
            <button
            onClick={logout}
             className='w-full inline-block bg-gray-500 p-[10px] rounded-xl text-red-700 text-[22px]'>Logout</button>
        </li>
    </ul>
  )
}

export default SideBar
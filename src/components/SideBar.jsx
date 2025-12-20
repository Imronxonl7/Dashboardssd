import React, { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';
import { RiMenuUnfold2Fill, RiMenuUnfoldFill } from 'react-icons/ri';
import { TbLogout2 } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SideBar = ({openSideBar ,setOpenSideBar}) => {

  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem("auth")
    navigate("/")
    toast.warn("Siz tizimdan chiqib ketdingiz")
  }
  return (
    <aside className={`fixed ${openSideBar ? "max-w-[270px]" : "max-w-[100px]"} duration-400 top-0 left-0 z-20 flex flex-col bg-white gap-5 h-screen border-x-1 dark:bg-gray-800  w-full p-5`}>
     <div className=' flex justify-between items-center'>
       <Link to={"/teachers"} className=' text-[34px] text-gray-800 dark:text-gray-400 '>Logo</Link>
      <button
      onClick={() => setOpenSideBar(! openSideBar)}
       className='cursor-pointer'> {openSideBar ? <RiMenuUnfold2Fill className={`text-[24px] text-gray-800 dark:text-gray-400 absolute top-[20px] right-[-50px]`}/> : <RiMenuUnfoldFill className={`text-[24px] text-gray-800 dark:text-gray-400 absolute top-[20px] right-[-50px]`}/>} </button>
     </div>
      <ul className='flex flex-col gap-5'>
        <li className={`dark:bg-gray-500 p-[10px] rounded-xl text-blue-500 border-1 dark:hover:bg-gray-500 border-blue-500 dark:border-gray-500 hover:text-white hover:bg-blue-500 transition-all duration-400  dark:text-white text-[22px]`}>
            <Link className={`flex items-center ${openSideBar ? "" : "justify-center"} gap-5`} to="/teachers">
            <FaChalkboardTeacher/>
            <span className={openSideBar ? "" : "hidden" }>Teachers</span>
</Link>

        </li>
        <li className={`dark:bg-gray-500 p-[10px] rounded-xl text-blue-500 border-1 dark:hover:bg-gray-500 border-blue-500 dark:border-gray-500 hover:text-white hover:bg-blue-500 transition-all duration-400  dark:text-white text-[22px]`}>
            <Link className={`flex items-center ${openSideBar ? "" : "justify-center"} gap-5`} to="/students">
            <PiStudent/>
             <span className={openSideBar ? "" : "hidden" }>Students</span>
            </Link>
           
        </li>
        <li className={`dark:bg-gray-500 p-[10px] rounded-xl text-red-400 border-1 dark:hover:bg-gray-500 border-red-400  dark:border-gray-500 hover:bg-red-800 transition-all duration-400  dark:text-red-700 text-[22px]`}>
            <button
            className={`flex items-center  ${openSideBar ? "" : "justify -center"}  gap-5`}
            onClick={logout} >
              <TbLogout2/>
              <span className={openSideBar ? "" : "hidden" }>Logout</span>
             </button>
             
        </li>
    </ul>
    </aside>
  )
}

export default SideBar
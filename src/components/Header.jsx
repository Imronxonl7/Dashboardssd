import React, { useEffect, useState } from 'react'
import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [dark ,setDark] = useState(false)
    useEffect(() => {
        if(dark){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    } , [dark])
  return (
    <header className='fixed top-0  w-full flex border-y-1 justify-end px-[30px] bg-white dark:bg-gray-700 py-[15px]'>
                <div className='flex items-center gap-[20px]'>
                    <NavLink to={"/"} className='text-[24px] text-gray-800 font-medium dark:text-gray-400'>
                    Profile
                </NavLink>
                <button
                onClick={() => setDark(!dark)}
                 className='w-[35px] flex items-center justify-center p-1 rounded-[50px] border-[2px] border-[black] border-sm'>
                    <FaMoon  className='text-[20px] ' />
                </button>
                </div>
    </header>
  )
}

export default Header
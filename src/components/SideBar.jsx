import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <ul className='fixed top-0 left-0 flex flex-col gap-5 h-screen bg-gray-800 max-w-[250px] w-full p-5'>
        <li className='w-full'>
            <Link className='w-full inline-block bg-gray-500 p-[10px] rounded-xl text-white text-[20px]' to="/teachers">Teachers</Link>
        </li>
        <li className='w-full'>
            <Link className='w-full inline-block bg-gray-500 p-[10px] rounded-xl text-white text-[20px]' to="/students">Students</Link>
        </li>
    </ul>
  )
}

export default SideBar
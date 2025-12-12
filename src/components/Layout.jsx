import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <SideBar/>
      <main className='pl-[270px] pt-5'>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
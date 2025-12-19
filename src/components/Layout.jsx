import React, { useState } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    const [openSideBar , setOpenSideBar] = useState(true )

  return (
    <>
      <Header/>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
      <main className={`pt-5 ${openSideBar ? "pl-[270px]" : "pl-[100px]"} duration-400`}>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
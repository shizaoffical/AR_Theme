import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDefault from "@components/header/headerDefault/HeaderDefault"
import Footer from '@components/footer/Footer'
function Layout() {
  return (
    <div>

      <HeaderDefault/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
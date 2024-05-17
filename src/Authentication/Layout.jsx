import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDefault from "../Components/header/headerDefault/HeaderDefault"
import Footer from '../Components/Footer/Footer'
// import HeaderCenter from '../Components/header/headerCenter/HeaderCenter'
// import HeaderPremium from '../Components/header/headerPremium/HeaderPremium'
function Layout() {
  return (
    <div>

      <HeaderDefault/>
      {/* <HeaderPremium/> */}
      {/* <HeaderCenter/> */}
     
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
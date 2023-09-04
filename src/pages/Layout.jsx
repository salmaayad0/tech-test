import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <>
    <header>
    <NavBar />
    </header>
     <main>
        <Outlet />
     </main>
     <footer>
      <Footer />
     </footer>
    </>
  )
}

export default Layout
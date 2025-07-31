import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen bg-stone-950 text-white overflow-x-hidden'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
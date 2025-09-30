import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/education/Navbar'
import Sidebar from '../../components/education/Sidebar'
import Footer from '../../components/education/Footer'



const Education = () => {
  return (
    <>
    <div className='text-default min-h-screen bg-white'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
      <div className='flex-1'>
        {<Outlet />}
      </div>
      </div>
      
        <Footer />
      
    
    </div>
    </>
  )
}

export default Education

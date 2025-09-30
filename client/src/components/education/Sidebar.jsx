import React from 'react'
import { assets } from '../../assets/assets'
import {  NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';



const Sidebar = () => {
    const { isEducation } = useContext(AppContext);

    const menuItems = [
    { name: 'Dashboard', path: '/education/dashboard', icon: assets.home_icon},
    { name: 'Add Course', path: '/education/add-course', icon: assets.add_icon},
   
    ]
  return isEducation && (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500/20 py-2 flex flex-col'>
        {menuItems.map((item) => (
           <NavLink
            to={item.path}
            key={item.name}
            end={item.path === '/education'}
            className={({ isActive }) => `flex items-center gap-2 p-2 hover:bg-gray-500/10 rounded ${isActive ? 'bg-gray-500/10' : ''}`}>
            <img src={item.icon} alt={item.name} className='w-6 h-6' />
            <p className='hidden md:block text-center'>{item.name}</p>
           </NavLink>
))}
      
    </div>
  )
}

export default Sidebar

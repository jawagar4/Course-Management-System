import React from 'react';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';




const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <img src={assets.logo} alt="Logo" className="w-28 1g:w-32" />

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
               <Link to='/'>Home</Link>
                <Link to={'/education'}>Education Dashboard</Link>
                <Link to={'/course-list'}>Courses</Link>
                

                <div className="hidden lg:flex items-center text-sm gap-2  px-3">
                    <SearchBar />
                </div>

                <div className="relative cursor-pointer">
                   
                </div>

              
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link to='/'>Home</Link>
                <Link to={'/education'}>Education Dashboard</Link>
                <Link to={'/course-list'}>Courses</Link>
               
            </div>

        </nav>
    )
}

export default Navbar

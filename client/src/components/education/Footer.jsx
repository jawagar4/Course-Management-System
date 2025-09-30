import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t border-gray-500/20'>
        <div className='flex  items-center  gap-4'>
            <img src={assets.logo} alt="Logo" className="hidden md:block w-20" />
            <div className='hidden md:block h-7 w-px bg-gray-500/40'></div>
            <p className='py-4 text-center text-xs md:text-sm text-gray-500'>© 2025 My School. All rights reserved.</p>
        
        <div className='flex gap-4 max-md:mt-4 items-center'>
            <a href='#'>
                <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
                </a>
            <a href='#'>
                <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
                </a>
            <a href='#'>
                <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
            </a>
            </div>
            </div>
    </footer>
  )
}

export default Footer

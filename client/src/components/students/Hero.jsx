import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'



const Hero = () => {

    
    return (
<>
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 pt-16 pb-32 hero bg-cover bg-center h-[450px]">
            <div className="flex flex-wrap items-center justify-center p-1.5 mt-32 rounded-full border border-indigo-100 text-xs">
                <div className="flex items-center">
                    <img className="size-7 rounded-full border-3 border-white"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                    <img className="size-7 rounded-full border-3 border-white -translate-x-2"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                    <img className="size-7 rounded-full border-3 border-white -translate-x-4"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                        alt="userImage3" />
                </div>
                <p className="-translate-x-2 text-white">Join The Learning course 1000+</p>
            </div>

            <h1
                className="text-4xl md:text-6xl text-center font-medium max-w-3xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">
               Jump into learning for less
            </h1>
            <p className="text-slate-600 md:text-base max-md:px-2 text-center max-w-xl mt-3">
                If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just ₹149 for new learners! Shop now.
            </p>

            <button
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 mt-8 rounded-full transition cursor-pointer">
                <span>Get Start  Learning</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834" stroke="#fff" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
        <SearchBar/>
        
               </>

                )
}

export default Hero

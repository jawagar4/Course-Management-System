import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className=" px-8 flex flex-col items-center gap-4 pt-5  px-8 md:px-0 ">
      <h1 className="text-3xl font-semibold text-gray-900 ">Learn anything, anywhere, anytime</h1>
      <p className="text-sm text-gray-600">Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
      <div className='flex items-center gap-4 font-medium mt-0'>
      <div className=" flex item-center relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
        <button className="relative z-10 bg-gray-800 text-white rounded-full px-8 py-3 font-medium text-sm">
          <Link to={'/course-list'}>Get Started</Link>
        </button>
      </div>
      <div className="flex items-center pb-5 gap-2 font-medium mt-4">
        <button type="submit" className=' flex items-center gap-2 px-10 py-3 cursor-pointer '>
          Learn more
          <img src={assets.arrow_icon} alt="arrow" className="w-5 h-5" />
        </button>
      </div>
      </div>
    </div>
  )
}

export default CallToAction

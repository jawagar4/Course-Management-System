import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { Link } from "react-router-dom";


const Navbar = () => {
const educatorData = dummyEducatorData;


 return (
    <> <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'> 
    <Link to='/'>
     <img src={assets.logo} alt="Logo" className="w-28 1g:w-32" /> 
     </Link> 
     <div className="flex items-center gap-5 text-gray-500 relative"> 
        <p>Hi!</p>
          <img className='max-w-8' src= {assets.profile_img} />
         
         </div> 
         </div>
         </>
  )
}

export default Navbar

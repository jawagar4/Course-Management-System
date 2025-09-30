import React from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

  const { currency, calculateRating } = useContext(AppContext);
  return (

    <>
    <Link to={'/course/' + course._id} onClick={() => scrollTo(0,0,10)} className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg">

      <img src={course.courseThumbnail} alt='' className="w-full " />


      <div className="p-3 text-left min-h-[150px] space-y-1">
        <p className="text-base font-semibold">{course.courseTitle}</p>
        <p className="text-gray-500">{course.educator.name}</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor (calculateRating(course)) ? assets.star : assets.star_blank} alt="star" className="w-4 h-4 inline-block" />
            ))}
          </div>
          <p className="text-gray-900 font-semibold mt-2">{course.courseRatings.length}</p>
        </div>
        <p className='text-gray-900 font-semibold text-base'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
        
      </div>

    </Link>
    
    </>
  )
}

export default CourseCard

import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { useContext } from 'react';

const CourseSection = () => {

  const { allCourses } = useContext(AppContext);

  return (
   <div className="py-2 md:px-40 px-8 mt-0">
      <h2 className="text-3xl font-bold text-gray-900 ">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-600">Discover our top-rated courses across various categories.
        From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-0 my-10 md:my-16">
            {allCourses.slice(0,8).map((course, index) => (
             <CourseCard key={index} course={course} />
           ))}</div>
<div className="flex justify-center">
      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)} className=" gap-2 inline-block bg-indigo-600  justify-center text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
        View All Courses
      </Link>
      </div>
    </div>
  )
}

export default CourseSection

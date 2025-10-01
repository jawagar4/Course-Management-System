import React, { useContext, useEffect, useState } from 'react';
import { getCoursesFromDB } from './IndexedDB';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCardDB = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCoursesFromDB();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const { currency, calculateRating } = useContext(AppContext);

  return (
    <Link to={'/course-details/ + course.id'} onClick={() => scrollTo(1)} className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg" >
      <div>
        {courses.map(course => (
          <div key={course.id} className="w-full">
            {course.image && (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <div className="p-3 text-left min-h-[150px] space-y-1">
            <h3 className="text-base font-semibold">{course.title}</h3>
            <p className="text-gray-900 font-semibold  text-base">
              {currency}{course.price} {course.discount}%
            </p>
</div>
            {/* Chapters */}
           
          </div>
        ))}
      </div>
    </Link>
  );
};

export default CourseCardDB;

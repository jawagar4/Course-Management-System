import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import SearchBar from "../../components/students/SearchBar";
import { AppContext } from "../../context/AppContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import CourseCard from '../../components/students/CourseCard';
import Pages from '../../pages/student/Pages';

const CourseList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = input
        ? allCourses.filter(course =>
            course.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        : allCourses;

      setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentCourses = filteredCourse.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(filteredCourse.length / itemsPerPage);


  return (
    <div className='relative md:px-20 px-8 pt-16 text-left'>
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h1 className="font-semibold text-4xl text-gray-800">Course</h1>
          <p onClick={() => setIsVisible(!isVisible)} className="text-gray-500 cursor-pointer">
            {isVisible ? "Hide" : "Filter"}
          </p>
          {isVisible && (
            <div className="mt-4 text-gray-500 italic">Filter options will appear here.</div>
          )}
        </div>
        <SearchBar searchQuery={input} />
      </div>

      {input && (
        <div
          className="inline-flex items-center gap-4 rounded border mt-8 -mb-8 text-gray-600 cursor-pointer"
          onClick={() => navigate('/course-list')}
        >
          <p className="flex items-center gap-2.5 border-gray-500/30 px-4 py-2 text-sm text-gray-600 rounded bg-white hover:text-red-500/70 hover:bg-red-500/10 hover:border-red-500/30 active:scale-95 transition">
            {input}
            <img src={assets.cross_icon} alt="Clear filter" className="cursor-pointer me-2" />
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
        {filteredCourse.length > 0 ? (
           currentCourses.map((course, index) => (
    <CourseCard key={index} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found {input && `for "${input}"`}
          </p>
        )}
      </div>
      <Pages
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>



    </div>
  );
};

export default CourseList;

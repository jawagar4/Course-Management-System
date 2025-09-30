import { useContext, useEffect, useState } from "react"
import { assets, data } from "../../assets/assets";
import SearchBar from "../../components/students/SearchBar";
import { AppContext } from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";
import CourseCard from '../../components/students/CourseCard'
import Pages from '../../pages/student/Pages'




const CourseList = () => {

  const [isVisible, setIsVisible] = useState(false);

  const { navigate, allCourses } = useContext(AppContext)
  const { input } = useParams()
  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()

      input ? setFilteredCourse(
        tempCourses.filter(
          item => item.courseTitle.toLowerCase().includes(input.toLowerCase())

        )
      )
        : setFilteredCourse(tempCourses)
    }
  }, [allCourses, input])

  
  return (
    <>
      <div className='relative md:px-20 px-8 pt-16 text-left'>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10  ">
          <div>
            <h1 className="font-semibold text-4xl text-gray-800">Course</h1>
            <p onClick={() => setIsVisible(!isVisible)}
              className=" text-gray-500 cursor-pointer ">
              {isVisible ? "Hide" : "Filter"}
            </p>
            {/* search bar */}
          </div>

          <SearchBar data={input} />
        </div>
        {input && <div className="inline-flex item-center gap-4 rounded border mt-8 -mb-8 text-gray-600 cursor-pointer" onClick={()=> navigate('/course-list')} >
          <p className="flex items-center gap-2.5  border-gray-500/30 px-4 py-2 text-sm text-gray-600 rounded bg-white hover:text-red-500/70 hover:bg-red-500/10 hover:border-red-500/30 active:scale-95 transition">
            {input}
          
          <img src={assets.cross_icon} alt="" className=" cursor-pointer me-"  ></img>
          </p>
        </div>}


        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
          {filteredCourse.slice(0,10).map((course, index) =>
            <CourseCard key={index} course={course} />
          )}

        </div>
      </div>
      <div>
        <>

  
        </>
        <Pages />

      </div>
    </>
  )
}

export default CourseList

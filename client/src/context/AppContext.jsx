import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'



export const AppContext = createContext();

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()

  const [allCourses, setAllCourses] = useState([]);
  const [isEducation, setEducation] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }

  //Function//
  const calculateRating = (course)=>{
    if(course.courseRatings.length === 0){
      return 0;
    }
    let totalRating = 0
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / course.courseRatings.length
  }

  //Function to Calculate Course Chapter Time

  const calculateChapterTime = (chapter)=>{
    let time = 0
    chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
  }

  //Function to Calculate course Duration
  const calculateCourseDuration = (course) =>{
    let time = 0

    course.courseContent.map((chapter)=> chapter.chapterContent.map(
      (lecture) => time += lecture.lectureDuration
    ))
    return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
  }

// Function
const calculateNoOfLectures = (course)=>{
  let totalLectures = 0;
  course.courseContent.forEach(chapter =>{
    if(Array.isArray(chapter.chapterContent)){
      totalLectures += chapter.chapterContent.length;
    }
  });
  return totalLectures;
}




useEffect(() => {
    fetchAllCourses();
  }, []);

    const value = {
      currency,
      allCourses,
      navigate,
      calculateRating,
      isEducation,
      setEducation,
      isVisible,
      setIsVisible,
      calculateChapterTime,
      calculateCourseDuration,
      calculateNoOfLectures
    };   

    return (
      <AppContext.Provider value={value}>
        {props.children}
      </AppContext.Provider>
    );
};


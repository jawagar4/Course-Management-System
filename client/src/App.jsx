import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Education from './pages/education/Education'
import Dashboard from './pages/education/Dashboard'
import StudentEnrolled from './pages/education/StudentEnrolled'
import AddCourse from './pages/education/AddCourse'
import Navbar from './components/students/Navbar'
import Footer from './components/students/Footer'
import Loading from './components/students/Loading'
import "quill/dist/quill.snow.css";
import CourseDetailsDB from './utils/CourseDetailsDB'





const App = ({}) => {
  const isEducationRoute = useMatch('/education/*');

  return (
    <div className='min-h-screen bg-white'>
      {!isEducationRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path="/course-details/:id" element={<CourseDetailsDB />} />

        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        
        {/* Nested routes for education */}

        <Route path="/education" element={<Education />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
       
      </Routes>
      {!isEducationRoute && <Footer />}
      
    </div>
  )
}

export default App

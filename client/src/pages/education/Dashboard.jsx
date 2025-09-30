import React, { useState, useEffect } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/students/Loading';


const Dashboard = () => {

  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(() => {
    fetchEnrolledStudents()
  }, [])

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='flex flex-col items-center max-w-3xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
        <table className='w-full table-fixed md:table-auto overflow-hidden pb-4'>
          <thead className='text-gray-500 border-b border-gray-500/20 text-sm'>
            <tr>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell '>#</th>
              <th className='px-4 py-3 font-semibold text-center'>Student</th>
              <th className='px-4 py-3 font-semibold text-center'>Course Title</th>
              <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Purchase Date</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-500'>
            {
              enrolledStudents.map((item, index)=>(
                <tr key={index} className='border-b border-gray-500/20'>
                  <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                  <td className='px-5 py-3 flex space-x-3 text-center'>
                    <img src={item.student.imageUrl} alt='' className='w-9 h-9 rounded-full' />
                    <span className='truncate py-2'>{item.student.name}</span>
                  </td>
                  <td className='px-4 py-3 px-2 truncate'>{item.courseTitle}</td>
                  <td className='px-4 py-3  hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading />
}

export default Dashboard

import React, { useEffect, useState } from 'react';
import { getCoursesFromDB } from './IndexedDB';

const CourseDetailsDB = () => {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCoursesFromDB();
            setCourses(data);
        };
        fetchCourses();
    }, []);

    // Select the first course or null if empty
    const course = courses.length > 0 ? courses[0] : null;

    if (!course) {
        return <p>Loading course details...</p>;
    }

    return course ? (
        <>
        <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-5 px-4 md:pt-15 pt-10 text-left'>
        <div className='absolute top-0 left-0 w-full h-section-height-[500px] -z-1 bg-gradient-to-b form-cyan-100/70'>
        </div>
            <div className='max-w-[650px] z-10 text-gray-500'>
            <h2  className='text-xl md:text-3xl font-semibold text-gray-800'>{course.title}</h2>
            
            {/* Chapters */}
            <div className="mt-2">
                <h4 className="font-semibold mb-1">Chapters:</h4>
                {course.chapters.length === 0 && <p className="text-gray-500">No chapters added.</p>}
                {course.chapters.map((chapter, idx) => (
                    <div key={chapter.chapterId} className="border p-2 rounded mb-2">
                        <p className="font-medium">
                            {idx + 1}. {chapter.chapterTitle} ({chapter.chapterContent.length} lectures)
                        </p>
                        {/* Lectures */}
                        <ul className="list-disc list-inside ml-4">
                            {chapter.chapterContent.map((lecture, lidx) => (
                                <li key={lecture.lectureId} className="text-gray-600">
                                    {lidx + 1}. {lecture.lectureTitle} - {lecture.lectureDuration} mins -{' '}
                                    <a
                                        href={lecture.lectureUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline"
                                    >
                                        Link
                                    </a>{' '}
                                    - {lecture.isPreviewFree ? 'Free Preview' : 'Paid'}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </>
    ) : <p>Loading course details...</p>;
};

export default CourseDetailsDB;

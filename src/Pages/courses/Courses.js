import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import CourseSidebar from './CourseSidebar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='flex'>
            <div className='m-3 lg:block md:block hidden rounded bg-orange-100'>
                {
                    courses.map(course => <CourseSidebar
                    key={course}
                    course={course}
                    ></CourseSidebar>)
                }
            </div>
            <div className='m-10 flex flex-wrap'>
                {
                    courses.map(course => <CourseCard 
                        key={course.id} 
                        course={course}
                        ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;
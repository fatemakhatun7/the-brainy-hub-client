import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
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
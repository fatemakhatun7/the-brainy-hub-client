import React from 'react';
import { Link } from 'react-router-dom';

const CourseSidebar = ({course}) => {
    return (
        <div className='m-10 p-3'>
            <ul className='text-xl p-3 rounded font-bold hover:bg-red-200'>
                <li><Link to={`/courses/${course.course_id}`}>{course.title}</Link></li>
            </ul>
        </div>
    );
};

export default CourseSidebar;
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    // console.log(course);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
            <figure><img className='h-60 w-full' src={course.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p>{course.description}</p>
                <h4 className='text-xl'>Total Student: <span className='font-bold'>{course.total_view}</span></h4>
                <div className='flex'>
                    <div className="w-10 m-3"><img className='rounded-full' src={course.teacher_photo} alt="" /></div>
                    <div className='m-2'>
                        <p>{course.teacher}</p>
                        <p>{course.teacher_profession}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Link to={`/courses/${course.course_id}`} className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </Link>
                    <Link to={`/courses/checkout/${course.course_id}`} className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
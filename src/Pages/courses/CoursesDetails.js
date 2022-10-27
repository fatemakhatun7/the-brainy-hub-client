import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const courseDetails = useLoaderData();

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
            <figure><img className='h-60 w-full' src={courseDetails.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseDetails.title}</h2>
                <p>{courseDetails.description}</p>
                <h4 className='text-xl'>Total Student: <span className='font-bold'>{courseDetails.total_view}</span></h4>
                <ul>
                    <li>Total Hour: {courseDetails.total_hour}</li>
                    <li>Total video: {courseDetails.total_video}</li>
                    <li>Total Live Class: {courseDetails.total_live_class}</li>
                    <li>Total Quiz: {courseDetails.total_quiz}</li>
                </ul>
                <div className='flex justify-between font-medium'>
                    <div>Rating: {courseDetails.rating}</div>
                    <div>Badge: {courseDetails.badge}</div>
                </div>
                <p className='font-bold'>Update: {courseDetails.update}</p>
                <div className='flex'>
                    <div className="w-10 m-3"><img className='rounded-full' src={courseDetails.teacher_photo} alt="" /></div>
                    <div className='m-2'>
                        <p>{courseDetails.teacher}</p>
                        <p>{courseDetails.teacher_profession}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="card-actions">
                        <button className="btn btn-primary">{courseDetails.money}</button>
                    </div>
                    <Link to={`/courses/checkout/${courseDetails.course_id}`} className="card-actions">
                        <button className="btn btn-primary">Enroll Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;
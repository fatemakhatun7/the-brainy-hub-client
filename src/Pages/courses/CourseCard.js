import React from 'react';
import toast from 'react-hot-toast';
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    // console.log(course);

    const handleDownload = ()=> {
        toast.success("You have successfully download the file.")
    }

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
                    <div>
                        <button onClick={handleDownload} className="btn btn-primary"><span className='m-2'>Download</span>  <FaFileDownload></FaFileDownload></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
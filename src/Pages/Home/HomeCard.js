import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeCard = ({category}) => {

    return (
        <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure><img className='h-44 w-36' src={category.image} alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">{category.name}</h2>
                <p>{category.description}</p>
                <div className="card-actions justify-end">
                <Link to='/courses' className="btn btn-primary"><span className='mr-3'>Go</span> <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
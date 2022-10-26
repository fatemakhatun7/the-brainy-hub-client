import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center text-2xl font-bold mt-10'>
            <h1>Error <span class="text-error">404</span></h1>
            <h4>Sorry, No data Found to access. </h4>
            <Link to='/'>Back to <span className='text-green-500'>Home</span></Link>
        </div>
    );
};

export default Error;
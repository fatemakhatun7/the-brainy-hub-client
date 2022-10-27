import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData();

    const handleCheckout = ()=>{
        toast.success("you have successfully enrolled our course and joined with the brainy hub.");
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
            <div className="card-body">
                <h2 className="card-title">{checkout.title}</h2>
                <p>{checkout.description}</p>
                <div className='flex justify-between'>
                    <div className="bg-orange-800 rounded">
                        <p className='font-bold p-3 text-white'>{checkout.money}</p>
                    </div>
                    <div className="card-actions">
                        <Link to='/' onClick={handleCheckout} className="btn btn-primary">Payment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
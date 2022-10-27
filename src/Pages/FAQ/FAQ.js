import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-5xl font-bold flex justify-center text-orange-700'>FAQ</h1>
            </div>
            <div className='m-10'>
            <div className="collapse rounded">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What does you exactly provide in this course?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p>Answer: We provide some courses that improve your reading, listening, writing and speaking skills on each Language Course.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Are you provide lifetime access?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p>Answer: Yes, we provide lifetime access.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Are you provide help after finish the course?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p>Answer: Yes, we provide help when you need.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FAQ;
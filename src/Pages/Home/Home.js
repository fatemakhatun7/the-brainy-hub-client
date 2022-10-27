import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';

const Home = () => {
    const allCategories = useLoaderData();
    return (
        <div>
            <div className='m-5'>
                {
                    allCategories.map(category => <HomeCard 
                        key={category.id} 
                        category={category}
                        ></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;
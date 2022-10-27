import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCarousel from '../Home/HomeCarousel';

const Home = () => {
    const allCategories = useLoaderData();
    return (
        <div>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    {
                        allCategories.map(pictures=> <HomeCarousel
                        key={pictures.id}
                        pictures={pictures}
                        ></HomeCarousel>)
                    }
                </div> 
            </div>
        </div>
    );
};

export default Home;
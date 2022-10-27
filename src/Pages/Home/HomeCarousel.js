import React from 'react';

const HomeCarousel = ({pictures}) => {
    console.log(pictures.image);
    return (
        <div className='m-1'>
            <div className="w-full h-44 relative carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src={pictures.image} alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allCategories = useLoaderData();
    return (
        <div>
            <h2>{allCategories.length}</h2>
        </div>
    );
};

export default Home;
import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import HomeCard from './HomeCard';

const Home = () => {
    const allCategories = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <div className='mt-10 mb-20 mx-5'>
                {
                    user?.uid ?
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Hello, <span className='text-purple-900 text-3xl'>{user.displayName}.</span> <br/> Welcome to The Brainy Hub Learning Portal.<br/> Explore and learn more Languages with us.</p>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Are You <span className='text-purple-900 text-3xl'>New </span> to this Website? <br/> Please Register to explore more.<br/> Already have an account? please Login.</p>
                            </div>
                        </>
                }
            </div>
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
import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='text-center bg-gray-200 py-20 pb-44 h-full'>
                <h1 className='text-6xl font-bold my-6'>Welcome To HeroGadget</h1>
                <p className='text-xl'>Best E-commerce platform for buying high quality Smart Home. <br /> Appliances at extremely affordable Price.</p>
                <div className='my-8 flex justify-center items-center gap-5'>
                    <Link to='/shop'><button className='bg-purple-200 py-4 px-8 text-lg font-medium rounded-full hover:bg-purple-400 shadow-lg'>Shop Now</button></Link>
                    <Link to='/about'><button className='bg-gray-200 border-2 border-purple-300 py-4 px-8 text-lg font-medium rounded-full hover:bg-purple-400 shadow-lg'>Learn More</button></Link>
                </div>
            </div>
            <div>
                <img className='md:-mt-36 mx-auto rounded-2xl mb-12' src="hero.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;
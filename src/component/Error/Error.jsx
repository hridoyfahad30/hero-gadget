import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const {error, status} = useRouteError();

    return (
        <div className='mx-auto text-center bg-purple-100 py-52 flex flex-col justify-center items-center'>
            <img className='w-40' src="error.png" alt="" />
            <div>
            <h1 className='text-9xl font-extrabold my-6'>{status}</h1>
            <h1 className='text-2xl font-medium'>{error.message}</h1>
            <Link to='/'><button className='bg-purple-900 py-4 px-12 rounded-full text-white text-xl shadow-2xl my-10 hover:bg-purple-600'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;
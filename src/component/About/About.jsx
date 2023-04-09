import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const About = () => {
    return (
        <div className='bg-gray-100 py-4'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold my-8'>Help Center</h1>
                <div className='flex items-center border-2 rounded-full px-4 py-1 w-96 bg-gray-200 mx-auto'>
                    <button><MagnifyingGlassIcon class="h-6 w-6 text-purple-950 stroke-purple-700" /></button>
                    <input className='py-1 px-4 text-slate-950 text-lg font-medium bg-gray-200 outline-none' type="search" name="" id="" placeholder='Search ...'/>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-3 text-center text-lg my-10'>
                <div className='p-10 border-r-2 border-slate-500 border-b-2'>
                    <button>Billing</button>
                </div>
                <div className='p-10  border-r-2 border-slate-500 border-b-2'>
                    <button>Feature</button>
                </div>
                <div className='p-10 border-slate-500 border-b-2'>
                    <button>Enterprise</button>
                </div>
                <div className='p-10  border-r-2 border-slate-500 border-b-2'>
                    <button>Support</button>
                </div>
                <div className='p-10  border-r-2 border-slate-500 border-b-2'>
                    <button>Contact Us</button>
                </div>
                <div className='p-10 border-slate-500 border-b-2'>
                    <button>Privacy</button>
                </div>
                <div className='p-10  border-r-2 border-slate-500'>
                    <button>Account</button>
                </div>
                <div className='p-10  border-r-2 border-slate-500'>
                    <button>My Orders</button>
                </div>
                <div className='p-10'>
                    <button>Developers</button>
                </div>
            </div>
        </div>
    );
};

export default About;
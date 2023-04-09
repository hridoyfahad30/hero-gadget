import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <nav className='container mx-auto flex items-center justify-between py-4 mb-6'>
            <div>
                <Link className='flex items-center gap-2' to='/'><img className='w-10 rounded-full' src="smarts.png" alt="" /><span className='text-2xl text-purple-800 font-bold '>Hero GadGet</span></Link>
            </div>
            <div className='flex items-center gap-8 text-lg font-semibold'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/shop'>Shop</ActiveLink>
                <ActiveLink to='/cart'><ShoppingCartIcon class="h-6 w-6 text-purple-700" /></ActiveLink>
                <ActiveLink to='/about'>About Us</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;
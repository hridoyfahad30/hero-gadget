import React from 'react';

const Product = ({product}) => {
    const {id, name, picture, price, category, index} = product;
    return (
        <div className='border-2 p-4 rounded-lg bg-gray-100 shadow-xl'>
            <img className='m-auto rounded-xl shadow-xl' src={picture} alt="" />
            <div className='my-6'>
                <h1 className='text-2xl font-bold my-1'>{name}</h1>
                <h3 className='my-1 '>Category: {category}</h3>
                <h3 className='my-1 text-lg font-bold'>Price: {price}$</h3>
            </div>
            <button className='bg-purple-200 py-4 w-full rounded-full text-lg font-semibold shadow-lg mb-2 hover:bg-purple-400 duration-500'>Add To Cart</button>
        </div>
    );
};

export default Product;
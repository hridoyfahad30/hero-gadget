import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Shop = () => {

    const products = useLoaderData();

    return (
        <div className='container mx-auto grid md:grid-cols-3 gap-10 mt-10 mb-32'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
            
        </div>
    );
};

export default Shop;
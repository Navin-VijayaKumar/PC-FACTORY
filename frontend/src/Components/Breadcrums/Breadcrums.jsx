import React from 'react';
import './Breadcrums.css';
import arrow from './Assets/arrow.png';

export const Breadcrums = (props) => {
    const { product } = props;

    if (!product) return null; // Ensure product exists before rendering

    return (
        <div className="Breadcrum">
            HOME <img src={arrow} alt='' /> SHOP <img src={arrow} alt='' /> {product.category}
            <img src={arrow} alt='' /> {product.name}
        </div>
    );
};


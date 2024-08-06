import React, { useContext } from 'react';
import './Displayproduct.css';
import star1 from './Assets/star1.png';
import star2 from './Assets/star2.png';
import dstar1 from './Assets/dstar1.png';
import dstar2 from './Assets/dstar2.png';
import { Shopcontext } from '../../Context/Shopcontext';

const Displayproduct = (props) => {
    const { product } = props;
    const { addTocart } = useContext(Shopcontext);

    if (!product) return null;

    return (
        <div className='display-product'>
            <div className="display-product-left">
                <div className="display-product-img-list">
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className="display-product-img">
                    <img className='display-product-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className="display-product-right">
                <h1>{product.name}</h1>
                <div className="display-product-right-star">
                    <img src={star2} alt="" />
                    <img src={star2} alt="" />
                    <img src={star2} alt="" />
                    <img src={star2} alt="" />
                    <img src={dstar2} alt="" />
                    <p>(222)</p>
                </div>
                <div className="display-right-price">
                    <div className="display-right-old-price">
                    ₹{product.old_price}
                    </div>
                    <div className="display-right-new-price">
                    ₹{product.new_price}
                    </div>
                </div>
                <div className="display-right-description">
                    When building a PC, it's crucial to ensure all components are compatible to avoid mismatched parts.
                </div>
                <button onClick={() => { 
        console.log("Add to cart clicked", product.id); 
          addTocart(product.id); 
         }} className='display-right-button'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Displayproduct;

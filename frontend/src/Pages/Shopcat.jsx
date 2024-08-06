// src/Pages/Shopcat.jsx
import React, { useContext } from 'react';
import './Shopcat.css';
import { Shopcontext } from '../Context/Shopcontext';
import { Items } from '../Components/Items/Items';

export const Shopcat = (props) => {
    const { all_product } = useContext(Shopcontext);

    return (
        <div className='shopcat'>
            <img className='banner-img' src={props.banner} alt="" />
            <div className='Shopcat-disp-product'>
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Items
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

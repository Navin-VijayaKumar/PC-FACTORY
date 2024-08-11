import React from 'react';
import './Shop.css'
import gif1 from './Assets/gif3.webp';
import gif2 from './Assets/4090.webp';
import gig3 from './Assets/gig3.webp';
import gif4 from './Assets/gif4.webp';

import game1 from './Assets/game1.webp';
import game2 from './Assets/game2.webp';
import game3 from './Assets/game3.webp';
import game4 from './Assets/game4.webp';
import freegame from './Assets/freegame.jpg';

import introbg from './Assets/introbg.jpg'






export const Shop = () => {
  return (
    <div>
      <div className="displayimg">
        

        <h1>Products Available</h1>
        

      <img  src={gif1}  alt="Shop Background" />
      <img src={gif2} alt="Shop Background" />

      <h1>Brands Available</h1>
      <img src={gif4} alt="Shop Background" />

      <img src={gig3} alt="Shop Background" />
      <h1>Free Games For NVIDIA Graphic Card</h1>
      <img src={freegame} alt="Shop Background" />

      <img src={game4} alt="Shop Background" />

      <img src={game1} alt="Shop Background" />
      <img src={game2} alt="Shop Background" />
      <img src={game3} alt="Shop Background" />


      </div>
    </div>
  );
};

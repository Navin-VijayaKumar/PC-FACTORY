import React from 'react';
import './Shop.css'
import { useEffect,useState } from 'react';
import gif1 from './Assets/gif3.webp';
import gif2 from './Assets/4090.webp';
import gig3 from './Assets/gig3.webp';
import gif4 from './Assets/gif4.webp';

import game1 from './Assets/game1.webp';
import game2 from './Assets/game2.webp';
import game3 from './Assets/game3.webp';
import game4 from './Assets/game4.webp';


const media = [
  { type: "gif", src: gif1 },
  { type: "gif", src: gif2 },
  { type: "gif", src: gig3 },
  { type: "gif", src: gif4 },
  { type: "gif", src: game1 },
  { type: "gif", src: game2 },
  { type: "gif", src: game3 },
  { type: "gif", src: game4 },
];

const Shop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2800);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="imageslider">
      <h2>Available Products</h2>
      <div className="carousel">
      <div className="carousel-container">
  {media[currentIndex].type === "gif" ? (
    <img
      src={media[currentIndex].src}
      alt={`Slide ${currentIndex + 1}`}
      className="carousel-image"
    />
  ) : (
    <video
      src={media[currentIndex].src}
      className="carousel-image"
      autoPlay
      muted
      loop
    />
  )}
</div>

        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};




export default Shop;

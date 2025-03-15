import React, { useState, useEffect } from "react";
import "./Items.css";
import { Link } from "react-router-dom";

export const Items = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="container1">
      <div className="item">
        {loading ? (
          <div className="skeleton-wrapper">
            <div className="skeleton skeleton-img"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-price"></div>
          </div>
        ) : (
          <Link to={`/product/${props.id}`}>
            <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
            <div>
              <p>{props.name}</p>
            </div>
            <div className="price">
              <div className="price-new">₹{props.new_price}</div>
              <div className="price-old">₹{props.old_price}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

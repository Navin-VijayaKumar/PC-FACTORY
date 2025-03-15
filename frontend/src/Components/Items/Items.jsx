import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Items.css";

export const Items = ({ id, image, name, new_price, old_price, loading }) => {
  return (
    <div className="container1">
      <div className="item">
        {loading ? (
          // Skeleton Animation Structure
          <>
            <Skeleton height={350} width={375} />
            <Skeleton height={30} width={200} style={{ margin: "10px 20px" }} />
            <div className="price">
              <Skeleton height={25} width={80} />
              <Skeleton height={25} width={80} />
            </div>
          </>
        ) : (
          // Actual Product Data
          <Link to={`/product/${id}`}>
            <img onClick={() => window.scrollTo(0, 0)} src={image} alt="" />
            <div>
              <p>{name}</p>
            </div>
            <div className="price">
              <div className="price-new">₹{new_price}</div>
              <div className="price-old">₹{old_price}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

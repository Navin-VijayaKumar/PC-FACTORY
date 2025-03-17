import React, { useState, useEffect } from "react";
import "./Items.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Items = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call (replace with actual fetch)
        const response = await fetch(`https://your-api.com/product/${props.id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Only stop loading once data is fetched
      }
    };

    fetchData();
  }, [props.id]);

  return (
    <div className="container1">
      <div className="item">
        {loading ? (
          // **Show Skeleton Loader while fetching**
          <div className="skeleton-wrapper">
            <Skeleton width={"100%"} height={350} />
            <Skeleton width={"60%"} height={30} style={{ margin: "10px 0" }} />
            <div className="skeleton-price-container">
              <Skeleton width={70} height={25} />
              <Skeleton width={60} height={22} />
            </div>
          </div>
        ) : (
          // **Show Data after Fetching**
          <Link to={`/product/${props.id}`}>
            <img
              onClick={() => window.scrollTo(0, 0)}
              src={data?.image || props.image}
              alt="Product"
            />
            <div>
              <p>{data?.name || props.name}</p>
            </div>
            <div className="price">
              <div className="price-new">₹{data?.new_price || props.new_price}</div>
              <div className="price-old">₹{data?.old_price || props.old_price}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

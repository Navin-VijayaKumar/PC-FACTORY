import React, { useState, useEffect } from "react";
import "./Items.css";
import { Link } from "react-router-dom";

export const Items = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API (Replace with your actual API URL)
        const response = await fetch(`https://pc-factory-backend.onrender.com/product/${props.id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, [props.id]);

  return (
    <div className="container1">
      <div className="item">
        {loading ? (
          // **Show Spinner while loading**
          <div className="loading-spinner"></div>
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

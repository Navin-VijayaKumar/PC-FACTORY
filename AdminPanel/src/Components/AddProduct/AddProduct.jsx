import React, { useState } from 'react';
import './AddProduct.css';
import up from '../Assets/up.png';

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: null, // Initialize image as null
    category: "cpu",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    if (e.target.name === "image") {
      setProductDetails({ ...productDetails, image: e.target.files[0] }); // Store the selected file
    } else {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', product.image); // Append the image file

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
    .then((resp) => resp.json())
    .then((data) => { responseData = data });
    
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',

        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>
      {
        data.success?alert("product added"):alert("failed")
      
      })
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-items">
        <div className="addproduct-field">
          <p>Product Title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Enter here!"
          />
        </div>

        <div className="addproduct-field addproduct-price">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Enter here!"
          />
        </div>

        <div className="addproduct-field addproduct-price">
          <p>New-Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Enter here!"
          />
        </div>

        <div className="addproduct-field addproduct-category">
          <p>Product Category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="selector"
          >
            <option value="pre_build">Pre Build</option>
            <option value="cpu">CPU</option>
            <option value="gpu">GPU</option>
            <option value="mother_board">Mother Board</option>
            <option value="ram">RAM</option>
            <option value="smps">SMPS</option>
            <option value="case">CASE</option>
            <option value="storage">Storage</option>
          </select>
        </div>

        <div className="addproduct-field addproduct-image">
          <label htmlFor="file-input">
            <img src={up} className="imaged" alt="upload" />
          </label>
          <input
            onChange={changeHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>

        <button onClick={Add_Product} className="addproduct-button">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

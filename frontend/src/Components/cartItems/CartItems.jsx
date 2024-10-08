import React, { useContext, useState } from 'react';
import './CartItems.css';
import { Shopcontext } from '../../Context/Shopcontext';
import delete1 from './Assets/delete1.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromcart } = useContext(Shopcontext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = async (event) => {
    event.preventDefault();

    const cartItemsData = all_product
      .filter((e) => cartItems[e.id] > 0)
      .map((e) => `${e.name} (Qty: ${cartItems[e.id]})`);

    const dataToSend = {
      ...formData,
      cartItems: cartItemsData,
      totalAmount: getTotalCartAmount(),
      access_key: 'a8cf2cad-503d-4abc-8d1a-335fd6ad347d' 
    };

    const json = JSON.stringify(dataToSend);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setIsModalOpen(false); 
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='cartitems'>
     
      <div className="cartitems-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-main">
                <img src={e.image} alt="" className="cartitem-icon" />
                <p>{e.name}</p>
                <p> ₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p> ₹{e.new_price * cartItems[e.id]}</p>
                <img className='remove' src={delete1} onClick={() => { removeFromcart(e.id) }} alt="Delete Item" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}


      <div className="cartitems-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-items">
              <p>Subtotal</p>
              <p> ₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-items">
              <p>Shipping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-items">
              <h3>Total</h3>
              <h3> ₹{getTotalCartAmount()}</h3>
            </div>
          </div>

          <button onClick={() => setIsModalOpen(true)}>Proceed To Checkout</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Checkout</h2>

            <h3>Cart Items</h3>
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <p key={e.id}>{e.name} (Qty: {cartItems[e.id]})</p>
                );
              }
              return null;
            })}

          
            <form onSubmit={handleCheckout}>
              <label>Your Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Enter your name' required />

              <label>Your Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter your email' required />

              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder='Enter your address' required />

              <label>Contact Number</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} placeholder='Enter your contact number' required />

              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} rows="4" placeholder='Enter any additional details' required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItems;

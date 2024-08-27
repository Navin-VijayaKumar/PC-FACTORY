import React, { useContext } from 'react';
import './CartItems.css';
import { Shopcontext } from '../../Context/Shopcontext';
import delete1 from './Assets/delete1.png';

const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromcart  } = useContext(Shopcontext);

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
                    return (<div>
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
                  <hr/>
                  <div className="cartitem-total-items">
                    <p>Shipping Fees</p>
                    <p>Free</p>
                  </div>
                  <hr/>
                  <div className="cartitem-total-items">
                    <h3>Total</h3>
                    <h3> ₹{getTotalCartAmount()}</h3>

                  </div>
                </div>
                <button>Proceed To Checkout</button>
              </div>
              <div className="cartitem-promocode">
                <p>If you has promocode,Then enter it here</p>
                <div className="cartitem-promocode-box">
                  <input type="text" placeholder='promo code'/>
                  <button className='submit-btn'>Submit</button>
                </div>
              </div>
            </div>
        </div>
    );
}

export default CartItems;

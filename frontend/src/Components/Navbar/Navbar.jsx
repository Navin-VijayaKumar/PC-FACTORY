import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart from './Assets/cart.png';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../Context/Shopcontext';

export const Navbar = () => {
  const [items, setItems] = useState("items");
 const {getTotalcartitems}=useContext(Shopcontext);
  return (
    <div className='Navbar'>
      <ul className='Navbar-items'>
      <li onClick={() => setItems("shop")}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{items === "shop" ? <hr /> : null}</li>
        <li onClick={() => setItems("Pre Build")}><Link  style={{textDecoration: 'none'}} to='/Pre Build'>Pre Build</Link>{items === "Pre Build" ? <hr /> : null}</li>
        <li onClick={() => setItems("CPU")}><Link  style={{textDecoration: 'none'}} to='/CPU'>CPU</Link>{items === "CPU" ? <hr /> : null}</li>
        <li onClick={() => setItems("GPU")}><Link  style={{textDecoration: 'none'}} to='/GPU'>GPU</Link>{items === "GPU" ? <hr /> : null}</li>
        <li onClick={() => setItems("Mother Board")}><Link  style={{textDecoration: 'none'}} to='/Mother Board'>Mother Board</Link>{items === "Mother Board" ? <hr /> : null}</li>
        <li onClick={() => setItems("Ram")}><Link style={{textDecoration: 'none'}}  to='/Ram'>Ram</Link>{items === "Ram" ? <hr /> : null}</li>
        <li onClick={() => setItems("Storage")}><Link  style={{textDecoration: 'none'}} to='/Storage'>Storage</Link>{items === "Storage" ? <hr /> : null}</li>
        <li onClick={() => setItems("SMPS")}><Link  style={{textDecoration: 'none'}} to='/SMPS'>SMPS</Link>{items === "SMPS" ? <hr /> : null}</li>
        <li onClick={() => setItems("Case")}><Link  style={{textDecoration: 'none'}} to ='/Case'>Case</Link>{items === "Case" ? <hr /> : null}</li>
      </ul>
      <div className='Navbar-cart'>
      <Link to='/Cart'>
          <img src={cart} alt="Cart" />
        </Link>       
        <div className='nav-cart-count'>{getTotalcartitems()}</div>
      </div>
    </div>
  );
}

import React, { Component } from 'react';
import './Home.css';
import pc from './Assets/pc.png';
import gif1 from './Assets/gif1.webp';
import pcbg from './Assets/pcbg.png';

export class Home extends Component {
  render() {
    return (
      <div>
        {/* Background Section */}
        <div className="vanta-background">
          <div className="pfbg">
            <img src={pcbg}></img>
          </div>
          {/* Navbar */}
          <nav className="navbar">
           
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Build Now</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* New Product Section */}
        <div className="homeProduct">
          <h1>New Product</h1>
        </div>
        <div className="newProductimg">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Top Selling Section */}
       
      </div>
    );
  }
}

export default Home;

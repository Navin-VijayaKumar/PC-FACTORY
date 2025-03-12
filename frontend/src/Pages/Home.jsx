import React, { Component } from 'react';
import './Home.css';
import pc from './Assets/pc.png';
import gif1 from './Assets/gif1.webp';
import np1 from './Assets/np1.webp';

export class Home extends Component {
  render() {
    return (
      <div>
        {/* Background Section */}
        <div className="vanta-background">
          {/* Navbar */}
          <nav className="navbar">
            <div className="logo">
              <img src={pc} className="pclogo" alt="PC Logo" />
              <h2>PC Factory</h2>
            </div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Build Now</a></li>
              <li><a href="/shop">About Us</a></li>
              <li><a href="/shop">Contact</a></li>
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

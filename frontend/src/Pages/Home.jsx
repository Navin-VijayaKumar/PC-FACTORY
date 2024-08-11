import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import './Home.css';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import gif1 from './Assets/gif1.webp'
import np1 from './Assets/np1.webp'
export class Home extends Component {
  static propTypes = {}

  vantaEffect = null;
  vantaRef = createRef();

  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      // minHeight: 200.00,
      // minWidth: 200.00,
      // scale: 1.00,
      // scaleMobile: 1.00,
      // points: 7.00,
      // maxDistance: 25.00,
      // spacing: 20.00,
      // showDots: false
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
     
      scaleMobile: 1.00

    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div>
        <div ref={this.vantaRef} className="vanta-background">
          <nav>
            <div className="nav-link">
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="/shop">BUILD NOW</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">CONTACT</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="homeProduct">

        <h1>New Product</h1>
        </div>
        <div className="newProductimg">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
 
        <div className="topselling">
          <h1>Top Selling</h1>
        </div>
        <div className="topselling-product">
          <img src={gif1} alt="" />
          <img src={np1} alt="" />

        </div>
             </div>
    );
  }
}

export default Home;

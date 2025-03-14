import React from 'react'
import pc from './Assets/pc.png';
import './Timeline.css'
const Timeline = () => {

    
  return (
    <div className='all-time'>

 <div className="all-time1">

        <div className="time">
          <div className="time-container1 l">
          <img src={pc}></img>
            <div className="text-box">
            <h2>🛠 Support & Warranty</h2>
              <small>⭐ Customer Satisfaction: 9.2/10</small>
              <p>Our dedicated support team offers troubleshooting, repairs, and warranty services to ensure seamless user experience and satisfaction.</p>
             <span className='left-con-arrow'></span>
            </div>
          </div>
          <div className="time-container1 r">
          <img src={pc}></img>

            <div className="text-box">
              <h2>🔧 Assembly</h2>
              <small>⭐ Accuracy: 9.5/10</small>
              <p>Our assembly line integrates the latest advancements in automation and skilled craftsmanship to deliver reliable and durable PCs.</p>
              <span className='right-con-arrow'></span>

            </div>
          </div>
          <div className="time-container1 l">
          <img src={pc}></img>
            <div className="text-box">
              <h2>🖥 Testing & Quality</h2>
              <small>⭐ Reliability: 9.8/10</small>
              
              <p>Each PC undergoes rigorous performance, stress, and durability testing to ensure optimal functionality and long-term reliability.</p>
              <span className='left-con-arrow'></span>

            </div>
          </div>
          <div className="time-container1 r">
          <img src={pc}></img>

            <div className="text-box">
              <h2>🚀 Performance Tuning</h2>
              <small>⭐ Optimization: 8.8/10</small>
               
               <p>Advanced tuning and customization options allow users to enhance performance, overclock components, and maximize efficiency for gaming and professional use.</p>
               <span className='right-con-arrow'></span>

            </div>
          </div>
          <div className="time-container1 l">
          <img src={pc}></img>

            <div className="text-box">
              <h2>📦 Packaging & Delivery</h2>
              <small>⭐ Safety: 8.5/10</small>
            
              <p>Every PC is securely packaged to prevent damage during transit, ensuring safe and timely delivery to customers worldwide.</p>
              <span className='left-con-arrow'></span>

            </div>
          </div>
   

        </div>
       
    </div>
      </div>  )
}

export default Timeline
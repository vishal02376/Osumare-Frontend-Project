import React from 'react';
import './Connect.css';
import Form from '../assets/Form.png'

function Connect() {
    return (
        <div className="peace-containers">
        <div className="background-ele">
          <div className="left-blue"></div>
          <div className="right-orange"></div>
        </div>
        <div className="contents">
          <h1>Connect with Our Digital Marketing Experts</h1>
          <p>
          Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together
          </p>
        
            <img className='Form-img' src={Form}/>
       
        </div>
      </div>
    );
}

export default Connect;
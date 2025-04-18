import React from 'react';
import './Peace.css';

function Peace() {
    return (
        <div className="peace-container">
        <div className="background-elements">
          <div className="left-blue"></div>
          <div className="right-orange"></div>
        </div>
        <div className="content">
          <h1>Your Peace of Mind</h1>
          <p>
            Through our conversion-focused strategies, we ensure that property seekers are not just visitors, 
            but engaged prospects ready to make their next move in the real estate market.
          </p>
         <button className='btns'>get started</button>
        </div>
      </div>
    );
}

export default Peace;
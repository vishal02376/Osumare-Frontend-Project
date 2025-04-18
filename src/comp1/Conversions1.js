import React from 'react';
import './Conversions1.css';

import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'

function Conversions1() {
    return (
        <section className="conversions-section " >
            <div className='conversions-heading '>
                <h1>Our Expertise in Action</h1>
            </div>
            
            <div className='conversion-container'>
                {/* Left Side */}
                <div className='conversion-column'>
                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon5}  />
                        </div>
                        <div className='conversion-content'>
                            <h2>Effective CTAs</h2>
                            <p> See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
                        </div>
                    </div>
                    
                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon6}  />
                        </div>
                        <div className='conversion-content'>
                            <h2>Conversion-Optimized Landing Pages</h2>
                            <p>Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
                        </div>
                    </div>
                </div>
                
                {/* Right Side */}
                <div className='conversion-column'>
                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon7}  />
                        </div>
                        <div className='conversion-content'>
                            <h2>Trust Building with Social Proof</h2>
                            <p>Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
                        </div>
                    </div>
                    
                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon8}  />
                        </div>
                        <div className='conversion-content'>
                            <h2>Mobile-First Success:</h2>
                            <p> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conversions1;
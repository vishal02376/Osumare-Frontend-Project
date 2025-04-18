import React from 'react';
import './Conversions.css';
// Left side icons
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
// Right side icons
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

function Conversions() {
    return (
        <section className="conversions-section">
            <div className='conversions-heading'>
                     <h1>Driving Property Inquiries to Conversions</h1>
            </div>
            
            <div className='conversion-container'>
                {/* Left Side */}
                <div className='conversion-column'>

                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon1}  />
                        </div>

                        <div className='conversion-content'>
                            <h2>Call-to-Action Optimization</h2>
                            <p>Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
                        </div>
                    </div>
                    
                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon2}  />
                                       </div>
                             
                        <div className='conversion-content'>
                            <h2>Social Proof Utilization</h2>
                            <p>Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.</p>
                        </div>
                    </div>
                </div>
                
                {/* Right Side */}
                <div className='conversion-column'>
                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon3}  />
                        </div>
                        <div className='conversion-content'>
                            <h2>Landing Page Efficiency</h2>
                            <p>Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
                        </div>
                    </div>
                    
                    <div className='conversion-item'>
                        <div className='conversion-icon'>
                            <img src={icon4}  />
                        </div>
                        <div className='conversion-content'>
                            <h2>Mobile-Friendly Experience</h2>
                            <p>With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conversions;
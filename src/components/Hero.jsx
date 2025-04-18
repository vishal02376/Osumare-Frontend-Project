import React from "react";
import "./Hero.css";
import headerPic from '../assets/header.png';

const Hero = () => {
  return (
    <section className="main-hero-section">
      <div className="hero-box">
        <div className="bg-pic">


        </div>


        <div className="dark-overlay">
          
        </div>
        <div className="fancy-ellipse"></div>
        
              <div className="hero-text-area">    
              <h3 className="big-title">
  Elevate <span className="blue-text">Real Estate Success</span> with Osumare's Digital Expertise
</h3>
          <p className="small-desc">
                Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
          <button className="start-btn">Get started</button>
        </div>
      </div>
      
      <div className="pic-holder">
                    <img src={headerPic} alt="Real estate digital solutions" loading="lazy"/>
      </div>
    </section>
  );
};

export default Hero;
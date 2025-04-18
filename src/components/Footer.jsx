import React from "react";
import "./Footer.css";
import logo from '../assets/logo.png'
import X  from '../assets/X.png'
import Fb  from '../assets/Fb.png'
import Y from '../assets/Y.png'
import insta from '../assets/insta.png'

const Footer = () => {
  return (
    <footer className="footer" style={{ background: "linear-gradient(261.57deg, rgba(0, 111, 237, 0.12) 18.01%, rgba(179, 214, 255, 0.12) 90.03%)" }}>
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo}/>
          <p>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
          <div className="footer-address">
            <b>Address</b>
            <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharashtra, India.</p>
          </div>
          <div className="footer-contacts">
            <b>Contacts</b>
            <p><a href="mailto:hello@osumare.in">hello@osumare.in</a></p>
            <p><a href="tel:+918459876226">+91 8459 876226</a></p>
          </div>
        </div>
        <div className="footer-menu">
          <b>Menu</b>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="footer-social">
          <b>Social</b>
          <div className="social-icons">
           <img src={X}/>    <img src={Fb}/>   <img src={Y}/>   <img src={insta}/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Osumare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
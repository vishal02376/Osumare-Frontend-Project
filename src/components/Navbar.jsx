import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-os">
        <img src={logo} alt="Brand Logo" className="logo-img" />
      </div>
      <div className="contact-button">
        <button className="contact">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
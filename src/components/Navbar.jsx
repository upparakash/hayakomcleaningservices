import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/Logonew.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home" className="nav-logo">
        <img src={logo} alt="Logo" />
      </a>

      {/* Desktop Menu */}
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>

        {/* Mega Dropdown */}
        <li className="dropdown">
          <a href="#services" className="dropbtn">Services</a>

          <div className="dropdown-content">
            <div className="col">
              <h4>DETAILED CLEANING</h4>
              <a>General Cleaning</a>
              <a>Deep Cleaning</a>
              <a>Storage Area</a>
              <a>Window Cleaning</a>
              <a>Outdoor Cleaning</a>
              <a>Car Parking Umbrella</a>
              <a>Facade Cleaning</a>
            </div>

            <div className="col">
              <h4>SPECIAL CARE</h4>
              <a>Upholstery Cleaning</a>
              <a>Carpet Cleaning</a>
              <a>Mattress Cleaning</a>
            </div>

            <div className="col">
              <h4>KITCHEN CLEANING</h4>
              <a>Kitchen</a>
              <a>Kitchen Appliances</a>
            </div>

            <div className="col">
              <h4>PEST CONTROL</h4>
              <a>Pest Control</a>
              <a>Sterilization</a>
            </div>
          </div>
        </li>


        {/* Newly Added */}
        <li><a href="#teams">Teams</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="mobile-icon" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#home">Home</a>

        <details>
          <summary href="#services">Services</summary>
          <div className="mobile-sub">
            <p>General Cleaning</p>
            <p>Deep Cleaning</p>
            <p>Carpet Cleaning</p>
            <p>Kitchen Cleaning</p>
            <p>Pest Control</p>
          </div>
        </details>

        {/* Newly Added */}
        <a href="#teams">Teams</a>
        <a href="#reviews">Clients</a>

        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link instead of <a>
import "./Navbar.css";
import logo from "./images/Logonew.png";
import { HashLink } from "react-router-hash-link"; // ✅ import HashLink
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Mega Dropdown */}
        <li className="dropdown">
          <Link to="/services" className="dropbtn">Services</Link>

          <div className="dropdown-content">
            <div className="col">
              <h4>DETAILED CLEANING</h4>
              <Link to="/services/home-cleaning-services">Home Cleaning Services</Link>
              <Link to="/services/deep-cleaning-services">Deep Cleaning Services</Link>
              <Link to="/services/move-in-out-cleaning">Move-In / Move-Out Cleaning</Link>
              <Link to="/services/floor-tile-cleaning">Floor & Tile Cleaning</Link>
              <Link to="/services/office-commercial-cleaning">Office & Commercial Cleaning</Link>
              <Link to="/services/kitchen-bathroom-cleaning">Kitchen & Bathroom Cleaning</Link>
              <Link to="/services/facade-cleaning">Facade Cleaning</Link>
            </div>

            <div className="col">
              <h4>SPECIAL CARE</h4>
              <Link to="/services/sofa-cleaning">Sofa Cleaning</Link>
              <Link to="/services/carpet-cleaning">Carpet Cleaning</Link>
              <Link to="/services/curtain-cleaning">Curtain Cleaning</Link>
            </div>

            <div className="col">
              <h4>KITCHEN CLEANING</h4>
              <Link to="/services/kitchen-cleaning">Kitchen Cleaning</Link>
              <Link to="/services/kitchen-appliances-cleaning">Kitchen Appliances Cleaning</Link>
            </div>

            <div className="col">
              <h4>BEAUTY PARLOUR CLEANING</h4>
              <Link to="/services/salon-area-cleaning">Salon Area Cleaning</Link>
              <Link to="/services/equipment-tools-cleaning">Equipment & Tools Cleaning</Link>
            </div>
          </div>
        </li>

        {/* Other Links */}
          <HashLink smooth to="/#teams">Teams</HashLink>
        <HashLink smooth to="/#reviews">Clients</HashLink>
        <HashLink smooth to="/#about">About</HashLink>
        <HashLink smooth to="/#book">Contact</HashLink>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="mobile-icon" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/">Home</Link>

        <details>
          <summary>Services</summary>
          <div className="mobile-sub">
            <Link to="/services/home-cleaning-services">Home Cleaning Services</Link>
            <Link to="/services/deep-cleaning-services">Deep Cleaning Services</Link>
            <Link to="/services/sofa-cleaning">Sofa, Carpet & Curtain Cleaning</Link>
            <Link to="/services/kitchen-bathroom-cleaning">Kitchen & Bathroom Cleaning</Link>
            <Link to="/services/floor-tile-cleaning">Floor & Tile Cleaning</Link>
            <Link to="/services/office-commercial-cleaning">Office & Commercial Cleaning</Link>
            <Link to="/services/move-in-out-cleaning">Move-In / Move-Out Cleaning</Link>
            <Link to="/services/maid-services">Maid Services</Link>
          </div>
        </details>

        <HashLink smooth to="/#teams">Teams</HashLink>
        <HashLink smooth to="/#reviews">Clients</HashLink>
        <HashLink smooth to="/#about">About</HashLink>
        <HashLink smooth to="/#book">Contact</HashLink>
      </div>
    </nav>
  );
};

export default Navbar;

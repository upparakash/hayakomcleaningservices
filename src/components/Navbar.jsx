import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link instead of <a>
import "./Navbar.css";
import logo from "./images/Logonew.png";
import { HashLink } from "react-router-hash-link"; // ✅ import HashLink
import { FaYoutube, FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Logo" />
      </Link>
      {/* Social Media Icons */}
      {/* Social Media + Phone Numbers */}
      <div className="nav-social-contact">
        {/* Social Icons */}
        <div className="nav-social">
          <a
            href="https://www.youtube.com/@HayakomCleaning"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.instagram.com/hayakomservice/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61586310031233"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Phone Numbers */}
        <p className="nav-phone">
          <FaPhoneAlt className="phone-icon" />
          <a href="tel:+96555396880">+965 55396880</a>
          <span>|</span>
          <a href="tel:+96550449213">+965 50449213</a>
          <span>|</span>
          <a href="tel:+96560446934">+965 60446934</a>
        </p>
      </div>


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
              <Link to="/services/home-cleaning-services">Deep Cleaning Services</Link>
              <Link to="/services/home-cleaning-services">Move-In / Move-Out Cleaning</Link>
              <Link to="/services/floor-tile-cleaning">Floor & Tile Cleaning</Link>
              <Link to="/services/office-commercial-cleaning">Office & Commercial Cleaning</Link>
              <Link to="/services/kitchen-bathroom-cleaning">Kitchen & Bathroom Cleaning</Link>
              <Link to="/services/Facade-cleaning-services">Facade Cleaning</Link>
            </div>

            <div className="col">
              <h4>SPECIAL CARE</h4>
              <Link to="/services/sofa-carpet-curtain-cleaning">Sofa Cleaning</Link>
              <Link to="/services/carpet-cleaning-services">Carpet Cleaning</Link>
              <Link to="/services/curtain-cleaning-services">Curtain Cleaning</Link>
            </div>

            <div className="col">
              <h4>KITCHEN CLEANING</h4>
              <Link to="/services/kitchen-bathroom-cleaning">Kitchen Cleaning</Link>
              <Link to="/services/kitchen-bathroom-cleaning">Kitchen Appliances Cleaning</Link>
            </div>

            <div className="col">
              <h4>BEAUTY PARLOUR CLEANING</h4>
              <Link to="/services/home-cleaning-services">Salon Area Cleaning</Link>
              <Link to="/services/home-cleaning-services">Equipment & Tools Cleaning</Link>
            </div>
          </div>
        </li>

        {/* Other Links */}
        <HashLink smooth to="/#teams">Teams</HashLink>
        <HashLink smooth to="/#reviews">Clients</HashLink>
        <HashLink smooth to="/#about">About</HashLink>
        <a href="https://housecleankuwait.com/%d8%a7%d8%aa%d8%b5%d9%84-%d8%a8%d9%86%d8%a7/">
  Contact
</a>

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

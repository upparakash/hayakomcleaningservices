import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} Hayakom Cleaning Services. All Rights Reserved.
        </p>

        {/* Center: Email */}
        <p className="footer-text">
          <FaEnvelope className="footer-icon" /> 
          <a href="mailto:hayakomcleaningservices@gmail.com" className="footer-link">
            hayakomcleaningservices@gmail.com
          </a>
        </p>

        {/* Right: Phone */}
        <p className="footer-text">
          <FaPhoneAlt className="footer-icon" /> 
          <a href="tel:+96555396880" className="footer-link">+965 55396880</a> &nbsp; | &nbsp; 
          <a href="tel:+96550449213" className="footer-link">+965 50449213</a> &nbsp; | &nbsp; 
          <a href="tel:+96560446934" className="footer-link">+965 60446934</a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;

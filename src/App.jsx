import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";
import OurServicesDetails from "./components/OurServicesDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* TOP BAR */}
      <div className="text-white flex flex-col lg:flex-row justify-between items-center bg-[#323549] px-4 sm:px-6 py-3 text-xs sm:text-sm md:text-base border-b border-gray-700 gap-2 lg:gap-0">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 text-center lg:text-left gap-1">
          <p>
            <span className="font-semibold">E-Mail:</span>{" "}
            <a
              href="mailto:hayakomcleaningservices@gmail.com"
              className="hover:text-blue-400"
            >
              hayakomcleaningservices@gmail.com
            </a>
          </p>

          <p className="flex flex-wrap justify-center gap-2 lg:gap-3">
            <span className="font-semibold">Phone:</span>
            <a href="tel:+96555396880" className="hover:text-green-400">
              +965 55396880
            </a>{" "}
            |
            <a href="tel:+96550449213" className="hover:text-green-400">
              +965 50449213
            </a>{" "}
            |
            <a href="tel:+96560446934" className="hover:text-green-400">
              +965 60446934
            </a>
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-1 lg:mt-0 text-lg">
          <a href="/" className="hover:text-blue-500 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="/" className="hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-red-500 transition duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>

      <Navbar />

      {/* PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/:slug" element={<OurServicesDetails />} />
      </Routes>

      <Footer />

      {/* FLOATING CONTACT BUTTONS */}
      <div className="floating-wrapper">
        <div className={`contact-buttons ${open ? "show" : "hide"}`}>
          <a href="tel:+96555396880" className="icon phone">
            <FaPhoneAlt />
          </a>

          <a
            href="https://wa.me/96555396880"
            target="_blank"
            className="icon whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <button className="icon hide-btn" onClick={() => setOpen(!open)}>
          <IoMdClose className={`${open ? "" : "rotate"}`} />
        </button>
      </div>
    </>
  );
}

export default App;

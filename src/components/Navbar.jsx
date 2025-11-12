import React, { useState } from "react";
import logo from "./images/logo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <a href="#home" className="flex items-center">
        <img src={logo} alt="logo" className="h-12 w-auto" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        {[
          { name: "Home", to: "#home" },
          { name: "About Us", to: "#about" },
          { name: "Our Services", to: "#services" },
          { name: "Book Now", to: "#book" },
        ].map((link, index, arr) => (
          <React.Fragment key={link.name}>
            <a
              href={link.to}
              className="relative group hover:text-pink-600 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {index !== arr.length - 1 && (
              <span className="h-6 w-[1.5px] bg-gray-300 rounded"></span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          {open ? (
            <span className="text-2xl font-bold">&#10005;</span> // X icon
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col py-4 items-center text-gray-700 font-medium space-y-4 md:hidden">
          {[
            { name: "Home", to: "#home" },
            { name: "About Us", to: "#about" },
            { name: "Our Services", to: "#services" },
            { name: "Book Now", to: "#book" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.to}
              onClick={() => setOpen(false)}
              className="hover:text-pink-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

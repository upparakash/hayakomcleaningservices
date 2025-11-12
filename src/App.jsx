import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 🔔 Top Alert Bar */}
      <div className="text-white flex flex-col lg:flex-row justify-between items-center bg-[#323549] px-4 sm:px-6 py-3 text-xs sm:text-sm md:text-base border-b border-gray-700 gap-2 lg:gap-0">

        {/* Left Section: Contact Info */}
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
            <a href="tel:+96555396880" className="hover:text-green-400">+965 55396880</a> |
            <a href="tel:+96550449213" className="hover:text-green-400">+965 50449213</a> |
            <a href="tel:+96560446934" className="hover:text-green-400">+965 60446934</a>
          </p>
        </div>

        {/* Right Section: Social Icons */}
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
      <Home />
      <Footer />
    </>
  );
}

export default App;

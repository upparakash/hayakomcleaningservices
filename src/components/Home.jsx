import React, { useState, useEffect } from "react";
import Image1 from "./images/slide1.png";
import Image2 from "./images/slide2.jpeg";
import Image3 from "./images/slide3.jpg";
import Image4 from "./images/slide4.png";
import Image5 from "./images/slide5.png";
import Image6 from "./images/slide6.png";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import BookNow from "./BookNow";
import WhyChooseUs from "./WhyChooseUs";
import "./Home.css";

const Home = () => {
 const images = [
  {
    src: Image1,
    title: "Professional Home Cleaning Services in Kuwait",
    desc: "Reliable maid, deep cleaning, and floor polishing services for homes and offices.",
  },
  {
    src: Image2,
    title: "Expert Maid and Housekeeping Services in Kuwait",
    desc: "Affordable, professional maid and housekeeping solutions you can trust.",
  },
  {
    src: Image3,
    title: "Car and Sofa Cleaning Services in Kuwait",
    desc: "Specialized car wash and sofa deep cleaning using modern equipment.",
  },
  {
    src: Image4,
    title: "Tile & Floor Cleaning Service Across Kuwait",
    desc: "High-quality tile scrubbing, floor polishing, and stain removal services.",
  },
  {
    src: Image5,
    title: "Move-In / Move-Out Cleaning Services in Kuwait",
    desc: "Complete cleaning for apartments, offices, and villas before or after shifting.",
  },
  {
    src: Image6,
    title: "Trusted Cleaning Company in Kuwait",
    desc: "Hayakom Cleaning Service — your all-in-one home, maid, and car cleaning solution.",
  },
];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const goPrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <>
      {/* ✅ Hero Slider Section */}
      <div className="slider-container" id="home">
        <div className="slide">
          {/* <img src={images[current].src} alt="Slide" className="slide-image" /> */}
          <img
  src={images[current].src}
  alt={images[current].title}
/>
          <div className="slide-overlay" />

          <div className="slide-text">
            <h1>{images[current].title}</h1>
            <p>{images[current].desc}</p>
            <button
              className="hero-btn"
              onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </button>
          </div>

          {/* Arrows */}
          <button className="arrow left" onClick={goPrev}>
            &#10094;
          </button>
          <button className="arrow right" onClick={goNext}>
            &#10095;
          </button>
        </div>
      </div>

      {/* ✅ Landing Page Sections */}
      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <OurServices />
      </section>
      <section id="services">
        <WhyChooseUs />
      </section>

      <section id="book">
        <BookNow />
      </section>
    </>
  );
};

export default Home;

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
      title: "Quality Contracting Services You Can Trust",
      desc: "Delivering excellence and reliability throughout Kuwait",
    },
    {
      src: Image2,
      title: "We Build with Integrity & Professionalism",
      desc: "Providing top-notch construction and maintenance solutions",
    },
    {
      src: Image3,
      title: "Quality Contracting Services You Can Trust",
      desc: "Delivering excellence and reliability throughout Kuwait",
    },
    {
      src: Image4,
      title: "We Build with Integrity & Professionalism",
      desc: "Providing top-notch construction and maintenance solutions",
    },
     {
      src: Image5,
      title: "We Build with Integrity & Professionalism",
      desc: "Providing top-notch construction and maintenance solutions",
    },
    {
      src: Image6,
      title: "We Build with Integrity & Professionalism",
      desc: "Providing top-notch construction and maintenance solutions",
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
          <img src={images[current].src} alt="Slide" className="slide-image" />
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

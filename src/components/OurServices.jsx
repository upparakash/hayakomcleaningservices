import React, { useRef } from "react";
import "./OurServices.css";

const servicesEN = [
  {
    title: "HOUSE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/3515/3515788.png",
    description: "Our house cleaning service ensures every corner of your home is spotless and welcoming...",
    link: "/services/house-cleaning",
  },
  {
    title: "BATHROOM CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/8099/8099430.png",
    description: "Our bathroom cleaning service focuses on deep sanitization...",
    link: "/services/bathroom-cleaning",
  },
  {
    title: "MARBLE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/9956/9956908.png",
    description: "Our marble cleaning service uses specialized products...",
    link: "/services/marble-cleaning",
  },
  {
    title: "MAID SERVICE",
    icon: "https://cdn-icons-png.flaticon.com/512/6196/6196932.png",
    description: "Our maid service provides regular or one-time cleaning...",
    link: "/services/maid-service",
  },
  {
    title: "SOFA CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
    description: "Professional sofa and upholstery cleaning services...",
    link: "/services/sofa-cleaning",
  },
  {
    title: "OFFICE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
    description: "Complete office and commercial space cleaning...",
    link: "/services/office-cleaning",
  },
];

const OurServices = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Our services are designed to meet your cleaning needs efficiently.
      </p>

     {/* SLIDER BUTTONS */}
<button className="nav-btn nav-left" onClick={slideLeft}>
  &#10094;
</button>

<button className="nav-btn nav-right" onClick={slideRight}>
  &#10095;
</button>

      {/* SLIDER */}
      <div className="services-slider" ref={sliderRef}>
        <div className="services-container">
          {servicesEN.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="read-more">READ MORE</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

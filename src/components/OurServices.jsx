import React from "react";
import "./OurServices.css";

const servicesEN = [
  {
    title: "HOUSE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/3515/3515788.png",
    description:
      "Our house cleaning service ensures every corner of your home is spotless and welcoming...",
    link: "/services/house-cleaning",
  },
  {
    title: "BATHROOM CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/8099/8099430.png",
    description:
      "Our bathroom cleaning service focuses on deep sanitization...",
    link: "/services/bathroom-cleaning",
  },
  {
    title: "MARBLE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/9956/9956908.png",
    description:
      "Our marble cleaning service uses specialized products...",
    link: "/services/marble-cleaning",
  },
  {
    title: "MAID SERVICE",
    icon: "https://cdn-icons-png.flaticon.com/512/6196/6196932.png",
    description:
      "Our maid service provides regular or one-time cleaning...",
    link: "/services/maid-service",
  },
];

const OurServices = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Our services are designed to meet your cleaning needs efficiently.
      </p>

      <div className="services-container">
        {servicesEN.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            {/* READ MORE LINK */}
            <a href={service.link} className="read-more">
              READ MORE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

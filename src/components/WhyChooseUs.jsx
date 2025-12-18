import React, { useRef } from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const content = {
    title: "Why Choose Hayakom Cleaning Service Kuwait",
    cards: [
      {
        icon: "👷‍♂️",
        heading: "Experienced and Trained Cleaning Staff",
        text: "Our professional cleaners are fully trained and experienced in delivering high-quality cleaning services for homes, offices, and commercial spaces across Kuwait.",
      },
      {
        icon: "🧰",
        heading: "High-Quality Cleaning Equipment",
        text: "We use advanced cleaning equipment and modern tools to ensure deep, effective, and long-lasting cleaning results for every service.",
      },
      {
        icon: "🌿",
        heading: "Eco-Friendly and Safe Cleaning Products",
        text: "Our eco-friendly and non-toxic cleaning products are safe for children, pets, and the environment while delivering powerful cleaning performance.",
      },
      {
        icon: "💰",
        heading: "Affordable and Transparent Pricing",
        text: "We offer competitive pricing with complete transparency—no hidden charges.",
      },
      {
        icon: "⏱️",
        heading: "On-Time and Reliable Service",
        text: "Punctuality and reliability are our priorities. Our team arrives on time and completes every job efficiently.",
      },
      {
        icon: "🧾",
        heading: "Customized Cleaning Plans",
        text: "We provide flexible and customized cleaning plans tailored to your space and schedule.",
      },
    ],
  };

  return (
    <section className="why-container">
      <h2 className="why-title">{content.title}</h2>

      {/* SLIDE BUTTONS */}
      <button className="slide-btn left" onClick={slideLeft}>
        ◀
      </button>
      <button className="slide-btn right" onClick={slideRight}>
        ▶
      </button>

      {/* SLIDER */}
      <div className="why-slider" ref={sliderRef}>
        {content.cards.map((card, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{card.icon}</div>
            <h3 className="why-heading">{card.heading}</h3>
            <p className="why-text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

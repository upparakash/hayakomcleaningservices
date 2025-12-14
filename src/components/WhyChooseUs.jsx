import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const content = {
    title: "Why Choose Hayakom Cleaning Service Kuwait",
    cards: [
      {
        icon: "👍",
        heading: "Exceptional Cleaning Quality & Customer Satisfaction",
        text: "At Hayakom Cleaning Service, we deliver exceptional quality and ensure complete customer satisfaction for every cleaning project — from home cleaning and maid service to car cleaning and deep cleaning across Kuwait.",
        link: "/why-hayakom/quality",
      },
      {
        icon: "📅",
        heading: "Reliable Cleaning Scheduling",
        text: "We’re known for our reliability, transparency, and flexible cleaning schedules. Whether you need regular maid service, one-time deep cleaning, or move-in/move-out cleaning in Kuwait — we fit our services around your busy life.",
        link: "/why-hayakom/scheduling",
      },
      {
        icon: "🌍",
        heading: "Eco-friendly Home & Car Cleaning Services",
        text: "Our trained professionals use eco-friendly products for safe and effective cleaning — including sofa cleaning, tile & floor cleaning, and car detailing. We care about your health and the environment.",
        link: "/why-hayakom/eco-friendly",
      },
    ],
  };

  return (
    <section className="why-container">
      <h2 className="why-title">{content.title}</h2>

      <div className="why-cards">
        {content.cards.map((item, index) => (
          <div className="why-card" key={index}>
            <span className="why-icon">{item.icon}</span>
            <h3>{item.heading}</h3>
            <p>{item.text}</p>

            <a href={item.link} className="why-read-more">
              READ MORE <span className="arrow1">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

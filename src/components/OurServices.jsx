import  { useRef } from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";

const servicesEN = [
  {
    title: "HOME CLEANING SERVICES",
    icon: "https://cdn-icons-png.flaticon.com/512/3515/3515788.png",
    description:
      "Professional home cleaning services to keep your living space fresh, clean, and hygienic.",
    slug: "home-cleaning-services",
  },
  {
    title: "MAID SERVICES",
    icon: "https://cdn-icons-png.flaticon.com/512/6196/6196932.png",
    description:
      "Reliable maid services available daily, weekly, or monthly based on your needs.",
    slug: "maid-services",
  },
  {
    title: "DEEP CLEANING SERVICES",
    icon: "https://cdn-icons-png.flaticon.com/512/8099/8099430.png",
    description:
      "Intensive deep cleaning service covering every corner for complete sanitation.",
    slug: "home-cleaning-services",
  },
  {
    title: "OFFICE & COMMERCIAL CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
    description:
      "Professional cleaning solutions for offices, shops, and commercial spaces.",
    slug: "office-commercial-cleaning",
  },
  {
    title: "SOFA, CARPET & CURTAIN CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
    description:
      "Specialized cleaning for sofas, carpets, and curtains to remove dust and stains.",
    slug: "sofa-carpet-curtain-cleaning",
  },
  {
    title: "KITCHEN & BATHROOM CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/9956/9956908.png",
    description:
      "Deep kitchen and bathroom cleaning with strong focus on hygiene and sanitization.",
    slug: "kitchen-bathroom-cleaning",
  },
  {
    title: "FLOOR & TILE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/4332/4332738.png",
    description:
      "Professional floor and tile cleaning to restore shine and remove tough dirt.",
    slug: "floor-tile-cleaning",
  },
  {
    title: "MOVE-IN / MOVE-OUT CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/1041/1041873.png",
    description:
      "Complete move-in and move-out cleaning for a fresh and ready-to-use space.",
    slug: "move-in-move-out-cleaning",
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
        We provide complete cleaning solutions for residential and commercial spaces
        across Kuwait. Our services are designed to meet different needs with flexible
        timing and affordable pricing.
      </p>

      <p className="services-subtitle">
        No matter the size of the space, our professional team ensures spotless results
        with care and attention.
      </p>


      <button className="nav-btn nav-left" onClick={slideLeft}>
        &#10094;
      </button>
      <button className="nav-btn nav-right" onClick={slideRight}>
        &#10095;
      </button>

      <div className="services-slider" ref={sliderRef}>
        <div className="services-container">
          {servicesEN.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {/* IMPORTANT FIX */}
              <Link to={`/services/${service.slug}`} className="read-more">
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

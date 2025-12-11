import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OurServicesDetails.css";

const serviceData = {
  "house-cleaning": {
    title: "House Cleaning",
    image: "https://cdn-icons-png.flaticon.com/512/3515/3515788.png",
    longDescription:
      "Our house cleaning service covers deep dusting, mopping, sanitizing, and more. We ensure your home is fresh, clean, and hygienic.",
  },
  "bathroom-cleaning": {
    title: "Bathroom Cleaning",
    image: "https://cdn-icons-png.flaticon.com/512/8099/8099430.png",
    longDescription:
      "Our bathroom cleaning service includes stain removal, tile scrubbing, disinfecting, and complete sanitization.",
  },
  "marble-cleaning": {
    title: "Marble Cleaning",
    image: "https://cdn-icons-png.flaticon.com/512/9956/9956908.png",
    longDescription:
      "We use advanced chemicals & polishing machines to restore shine and remove stains from marble surfaces.",
  },
  "maid-service": {
    title: "Maid Service",
    image: "https://cdn-icons-png.flaticon.com/512/6196/6196932.png",
    longDescription:
      "Our trained maids provide full-time, part-time, and on-demand cleaning for homes and offices.",
  },
};

const OurServicesDetails = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return <h2 style={{ textAlign: "center" }}>Service Not Found</h2>;
  }

  return (
    <div className="details-container">
      <img src={service.image} alt={service.title} className="details-icon" />
      <h1 className="details-title">{service.title}</h1>
      <p className="details-description">{service.longDescription}</p>

      <Link to="/" className="back-btn">← Back to Home</Link>
    </div>
  );
};

export default OurServicesDetails;

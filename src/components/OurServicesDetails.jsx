import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OurServicesDetails.css";

/* Service content map (can be API-driven later) */
const serviceData = {
  "house-cleaning": {
    title: "House Cleaning",
    description:
      "Our house cleaning service ensures every corner of your home is spotless, hygienic, and welcoming. We use eco-friendly products and trained professionals to deliver exceptional results.",
  },
  "bathroom-cleaning": {
    title: "Bathroom Cleaning",
    description:
      "We provide deep bathroom cleaning with advanced sanitization techniques to eliminate germs, stains, and odors, leaving your bathroom fresh and sparkling clean.",
  },
  "marble-cleaning": {
    title: "Marble Cleaning",
    description:
      "Our marble cleaning service restores shine and protects the surface using specialized products that prevent scratches and dullness.",
  },
  "maid-service": {
    title: "Maid Service",
    description:
      "Professional maid services available for daily, weekly, or one-time cleaning. Reliable, background-verified staff you can trust.",
  },
  "sofa-cleaning": {
    title: "Sofa Cleaning",
    description:
      "Deep sofa and upholstery cleaning that removes dust, stains, and allergens while preserving fabric quality.",
  },
  "office-cleaning": {
    title: "Office Cleaning",
    description:
      "Comprehensive office cleaning solutions to maintain a clean, productive, and professional workspace.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="service-detail">
        <div className="service-detail-container">
          <h1>Service Not Found</h1>
          <p>The service you are looking for does not exist.</p>
          <Link to="/" className="back-link">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <div className="service-detail-container">
        <h1>{service.title}</h1>
        <p>{service.description}</p>

        <Link to="/" className="back-link">
          ← Back to Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

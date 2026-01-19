import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    }).then(() => {
      setShowPopup(true);
      form.reset();
      setTimeout(() => setShowPopup(false), 3000);
    });
  };

  return (
   <section className="book-section">
  <h2 className="book-title">Contact Hayakom Cleaning</h2>

  <p className="book-subtitle">
    <strong>Company Name:</strong> Hayakom Cleaning Services Company <br />
    <strong>Governorate:</strong> Farwaniya Governorate <br />
    <strong>Area:</strong> Khaitan (007) <br />
    <strong>Street:</strong> Street 68 <br />
    <strong>Postal Code:</strong> 83050
  </p>

  <div className="map-box" style={{ height: "350px", marginBottom: "20px" }}>
    <iframe
      title="google-map"
      src="https://www.google.com/maps?q=Khaitan,Kuwait&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  </div>

  <a
    href="https://housecleankuwait.com/%d8%a7%d8%aa%d8%b5%d9%84-%d8%a8%d9%86%d8%a7/"
    target="_blank"
    rel="noopener noreferrer"
    className="submit-btn"
  >
    Go to Official Contact Page
  </a>
</section>

  );
};

export default BookNow;

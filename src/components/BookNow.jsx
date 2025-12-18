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
    <section id="book" className="book-section">
      {/* ✅ Title */}
      <h2 className="book-title">Book Cleaning Service in Kuwait</h2>

      {/* ✅ Subtitle */}
      <p className="book-subtitle">
        Looking for a reliable cleaning service in Kuwait?{" "}
        <strong>Hayakom Cleaning Services</strong> is here to help. Contact us
        today to book your cleaning service and enjoy a fresh, clean, and healthy
        environment.
        <br />
        <strong>Your cleanliness is our responsibility.</strong>
      </p>

      <div className="book-container">
        {/* ✅ Map */}
        <div className="map-box">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27980.889054058383!2d47.97465141804883!3d29.277255950480225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9aa59e1b3767%3A0xbcb934f33f7b1b8a!2sKuwait!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* ✅ Form */}
        <form
          className="form-box"
          action="https://formsubmit.co/hayakomcleaningservices@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Cleaning Service Booking"
          />

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                name="number"
                type="text"
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Service Required</label>
              <input
                name="service"
                type="text"
                required
                placeholder="e.g. Home cleaning, Maid service, Deep cleaning"
              />
            </div>
          </div>

          <div className="form-group full">
            <label>Your Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Booking Request
          </button>
        </form>
      </div>

      {/* ✅ Success Popup */}
      {showPopup && (
        <div className="success-popup">✅ Message Sent Successfully!</div>
      )}
    </section>
  );
};

export default BookNow;

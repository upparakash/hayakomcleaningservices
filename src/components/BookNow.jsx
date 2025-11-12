import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Submit form to FormSubmit
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    }).then(() => {
      setShowPopup(true);
      form.reset();

      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Hide popup after 3 sec
    });
  };

  return (
    <section id="book" className="book-section">
      {/* Title */}
      <h2 className="book-title">Book Now / احجز الآن</h2>
      <p className="book-subtitle">
        Reach out for service booking or inquiries. We are here to help!  
        / تواصل معنا لحجز الخدمة أو للاستفسارات. نحن هنا لمساعدتك!
      </p>

      <div className="book-container">
        {/* Left: Map */}
        <div className="map-box">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628389.4158979045!2d45.07916217382764!3d23.99594150494089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155e8e1bc96f8df5%3A0x9d84e622bd7e55c9!2sSaudi%20Arabia!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right: Single Form with FormSubmit */}
        <form 
          className="form-box"
          action="https://formsubmit.co/hayakomcleaningservices@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* Disable CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Email Subject */}
          <input type="hidden" name="_subject" value="New Cleaning Service Booking" />

          {/* Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label>Name / الاسم</label>
              <input name="name" type="text" required placeholder="Enter your name / اكتب اسمك" />
            </div>
            <div className="form-group">
              <label>Email / البريد الإلكتروني</label>
              <input name="email" type="email" required placeholder="Enter your email / اكتب بريدك الإلكتروني" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Number / رقم</label>
              <input name="number" type="text" required placeholder="Enter your number / اكتب رقمك" />
            </div>
            <div className="form-group">
              <label>Service / خدمة</label>
              <input name="service" type="text" required placeholder="Service you need / الخدمة المطلوبة" />
            </div>
          </div>

          <div className="form-group full">
            <label>Your Message / رسالتك</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message / اكتب رسالتك هنا"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message / إرسال الرسالة
          </button>
        </form>
      </div>

      {/* ✅ Success Popup */}
      {showPopup && (
        <div className="success-popup">
          ✅ Message Sent Successfully!
        </div>
      )}
    </section>
  );
};

export default BookNow;

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
      {/* ✅ Title with Keywords */}
      <h2 className="book-title">
        Book Cleaning Service in Kuwait / احجز خدمة التنظيف في الكويت
      </h2>

      {/* ✅ Subtitle — natural keyword placement */}
      <p className="book-subtitle">
        Book your <strong>home cleaning</strong>, <strong>maid service</strong>,{" "}
        <strong>car cleaning</strong>, or <strong>tile & floor cleaning</strong> in Kuwait today.  
        We also offer <strong>deep cleaning</strong>, <strong>sofa cleaning</strong>, and{" "}
        <strong>move-in/move-out cleaning</strong> for homes and offices.  
        <br />Reach out for service booking or inquiries — we’re here to help!  
        / تواصل معنا لحجز الخدمة أو للاستفسارات. نحن هنا لمساعدتك!
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
          <input type="hidden" name="_subject" value="New Cleaning Service Booking" />

          {/* ✅ Add contextual hints for each field */}
          <div className="form-row">
            <div className="form-group">
              <label>Name / الاسم</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name / اكتب اسمك"
              />
            </div>
            <div className="form-group">
              <label>Email / البريد الإلكتروني</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email / اكتب بريدك الإلكتروني"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Number / رقم</label>
              <input
                name="number"
                type="text"
                required
                placeholder="Enter your number / اكتب رقمك"
              />
            </div>

            <div className="form-group">
              <label>
                Service / الخدمة المطلوبة (Home, Maid, Car, Tile, Deep Cleaning)
              </label>
              <input
                name="service"
                type="text"
                required
                placeholder="e.g. Home cleaning Kuwait, Maid service Kuwait"
              />
            </div>
          </div>

          <div className="form-group full">
            <label>Your Message / رسالتك</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message (e.g. Need deep cleaning or car wash in Kuwait)"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Booking Request / إرسال طلب الحجز
          </button>
        </form>
      </div>

      {/* ✅ Success Popup */}
      {showPopup && <div className="success-popup">✅ Message Sent Successfully!</div>}
    </section>
  );
};

export default BookNow;
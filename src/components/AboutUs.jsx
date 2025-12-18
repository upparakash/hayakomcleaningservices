import AboutImg from "./images/image1.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-wrapper" id="about">
      <section className="about-section">
        <div className="about-content">
          <h3 className="about-subtitle">
            Hayakom Cleaning Services – Trusted Cleaning Experts in Kuwait
          </h3>

          <h2 className="about-title">
            Professional Cleaning Services for Homes & Businesses
          </h2>

          <p className="about-text">
            <strong>Hayakom Cleaning Services</strong> is a professional cleaning
            company in Kuwait, offering high-quality cleaning solutions for
            homes, offices, shops, and commercial spaces. We are committed to
            providing clean, safe, and healthy environments for our customers
            with reliable and affordable services.
          </p>

          <p className="about-text">
            Our team consists of trained and experienced cleaners who use modern
            equipment and eco-friendly cleaning products. We focus on every
            detail to ensure complete customer satisfaction. Whether it is daily
            cleaning or deep cleaning, we deliver excellent results every time.
          </p>

          <p className="about-text">
            We offer a wide range of services including <strong>home cleaning</strong>,{" "}
            <strong>maid services</strong>, <strong>deep cleaning</strong>,{" "}
            <strong>sofa and carpet cleaning</strong>, <strong>kitchen and bathroom cleaning</strong>, 
            and <strong>move-in/move-out cleaning</strong>. Our services are fully
            customized based on your requirements and schedule.
          </p>

          <p className="about-text">
            At Hayakom Cleaning Services, we believe cleanliness improves comfort,
            health, and productivity. That is why we follow strict hygiene
            standards and transparent pricing. Our goal is to build long-term
            trust by delivering consistent quality and professional service
            across Kuwait.
          </p>

          <p className="about-text">
            Choose <strong>Hayakom Cleaning Services</strong> for a cleaner,
            fresher, and healthier space you can rely on.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        <div className="about-image">
          <img
            src={AboutImg}
            alt="Professional Cleaning Services in Kuwait by Hayakom"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

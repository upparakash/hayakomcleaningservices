import React from "react";
import "./OurServices.css";

const servicesEN = [
  {
    title: "HOUSE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/3515/3515788.png",
    description:
      "Our house cleaning service ensures every corner of your home is spotless and welcoming. From dusting and vacuuming to sanitizing high-touch surfaces, we keep your living spaces sparkling clean.",
  },
  {
    title: "BATHROOM CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/8099/8099430.png",
    description:
      "Our bathroom cleaning service focuses on deep sanitization. We scrub tiles, clean fixtures, and polish mirrors to keep your bathroom looking and smelling fresh.",
  },
  {
    title: "MARBLE CLEANING",
    icon: "https://cdn-icons-png.flaticon.com/512/9956/9956908.png",
    description:
      "Our marble cleaning service uses specialized products to gently clean and polish marble surfaces, restoring their natural shine while protecting them from damage.",
  },
  {
    title: "MAID SERVICE",
    icon: "https://cdn-icons-png.flaticon.com/512/6196/6196932.png",
    description:
      "Our maid service provides regular or one-time cleaning, including dusting, vacuuming, and general tidying, ensuring your home stays clean and organized.",
  },
];

const servicesAR = [
  {
    title: "تنظيف المنزل",
    icon: "https://cdn-icons-png.flaticon.com/512/3515/3515788.png",
    description:
      "تضمن خدمة تنظيف المنزل لدينا أن كل زاوية من منزلك نظيفة ومرحبة. من إزالة الغبار والكنس إلى تعقيم الأسطح التي يتم لمسها بكثرة، نجعل مساحات المعيشة لديك نظيفة وبراقة.",
  },
  {
    title: "تنظيف الحمام",
    icon: "https://cdn-icons-png.flaticon.com/512/8099/8099430.png",
    description:
      "تركز خدمة تنظيف الحمام لدينا على التعقيم العميق. نقوم بفرك البلاط، وتنظيف التجهيزات، وتلميع المرايا للحفاظ على حمامك نظيفًا ومنعشًا.",
  },
  {
    title: "تلميع الرخام",
    icon: "https://cdn-icons-png.flaticon.com/512/9956/9956908.png",
    description:
      "تستخدم خدمة تلميع الرخام لدينا منتجات متخصصة لتنظيف وتلميع أسطح الرخام بلطف، مما يعيد لمعانها الطبيعي ويحميها من التلف.",
  },
  {
    title: "خدمة الخادمة",
    icon: "https://cdn-icons-png.flaticon.com/512/6196/6196932.png",
    description:
      "تقدم خدمة الخادمة لدينا تنظيفًا منتظمًا أو لمرة واحدة يشمل إزالة الغبار، والكنس، والترتيب، للحفاظ على منزلك نظيفًا ومرتبًا.",
  },
];

const OurServices = () => {
  return (
    <div className="services-section">

      {/* English Section */}
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Our services are designed to meet your cleaning needs efficiently,
        ensuring spotless spaces and exceptional customer satisfaction.
      </p>

      <div className="services-container">
        {servicesEN.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Arabic Section */}
      <h2 className="services-title" style={{ marginTop: "60px" }}>خدماتنا</h2>
      <p className="services-subtitle" style={{ direction: "rtl", textAlign: "right" }}>
        خدماتنا مصممة لتلبية احتياجاتك في التنظيف بكفاءة، مما يضمن مساحات نظيفة ورضا استثنائياً للعملاء.
      </p>

      <div className="services-container rtl">
        {servicesAR.map((service, index) => (
          <div className="service-card" key={index} style={{ direction: "rtl", textAlign: "right" }}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurServices;

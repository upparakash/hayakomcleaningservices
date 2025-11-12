import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const content = {
    en: {
      title: "Why Choose Us",
      cards: [
        {
          icon: "👍",
          heading: "Exceptional Quality & Customer Satisfaction",
          text: "At Semma United Contracting Service, we are committed to providing outstanding quality and ensuring customer satisfaction with every service."
        },
        {
          icon: "📅",
          heading: "Reliable Scheduling",
          text: "Known for our reliability, transparency, and attention to detail, we offer flexible scheduling options to easily fit our services into your busy life and meet your specific needs."
        },
        {
          icon: "🌍",
          heading: "Eco-friendly & Effective Cleaning",
          text: "Our team of highly trained professionals uses eco-friendly, effective cleaning products to ensure a safe and healthy environment for you and your family."
        }
      ]
    },

    ar: {
      title: "لماذا تختارنا",
      cards: [
        {
          icon: "👍",
          heading: "الجودة الاستثنائية ورضا العملاء",
          text: "في هالة لخدمات التنظيف، نلتزم بتقديم جودة استثنائية وضمان رضا العملاء مع كل خدمة."
        },
        {
          icon: "🌍",
          heading: "التنظيف الصديق للبيئة والفعال",
          text: "يستخدم فريقنا المدرب تدريبًا عاليًا منتجات تنظيف صديقة للبيئة وفعالة لضمان بيئة آمنة وصحية لك ولعائلتك."
        },
        {
          icon: "⏰",
          heading: "الموثوقية والجدولة المرنة",
          text: "نحن معروفون بالموثوقية والشفافية، ونقدم خيارات جدولة مرنة لتناسب خدماتنا مع جدولك المزدحم بسهولة."
        }
      ]
    }
  };

  return (
    <>
      {/* English Section */}
      <section className="why-container">
        <h2 className="why-title">{content.en.title}</h2>

        <div className="why-cards">
          {content.en.cards.map((item, index) => (
            <div className="why-card" key={index}>
              <span className="why-icon">{item.icon}</span>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Arabic Section */}
      <section className="why-container rtl">
        <h2 className="why-title">{content.ar.title}</h2>

        <div className="why-cards">
          {content.ar.cards.map((item, index) => (
            <div className="why-card" key={index}>
              <span className="why-icon">{item.icon}</span>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

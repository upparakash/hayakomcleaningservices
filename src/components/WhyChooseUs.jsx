
import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const content = {
    en: {
      title: "Why Choose Hayakom Cleaning Service Kuwait",
      cards: [
        {
          icon: "👍",
          heading: "Exceptional Cleaning Quality & Customer Satisfaction",
          text: "At Hayakom Cleaning Service, we deliver exceptional quality and ensure complete customer satisfaction for every cleaning project — from home cleaning and maid service to car cleaning and deep cleaning across Kuwait.",
        },
        {
          icon: "📅",
          heading: "Reliable Cleaning Scheduling",
          text: "We’re known for our reliability, transparency, and flexible cleaning schedules. Whether you need regular maid service, one-time deep cleaning, or move-in/move-out cleaning in Kuwait — we fit our services around your busy life.",
        },
        {
          icon: "🌍",
          heading: "Eco-friendly Home & Car Cleaning Services",
          text: "Our trained professionals use eco-friendly products for safe and effective cleaning — including sofa cleaning, tile & floor cleaning, and car detailing. We care about your health and the environment.",
        },
      ],
    },

    ar: {
      title: "لماذا تختار خدمات هياكم للتنظيف في الكويت",
      cards: [
        {
          icon: "👍",
          heading: "جودة تنظيف استثنائية ورضا العملاء",
          text: "في شركة هياكم لخدمات التنظيف، نقدم جودة عالية ونضمن رضا العملاء في جميع الخدمات مثل تنظيف المنازل، وخدمات العاملات، وتنظيف السيارات، والتنظيف العميق في جميع مناطق الكويت.",
        },
        {
          icon: "🌍",
          heading: "تنظيف صديق للبيئة وفعال",
          text: "يستخدم فريقنا منتجات تنظيف صديقة للبيئة وفعالة لتوفير خدمات تنظيف الأرضيات والبلاط، وتنظيف الكنب والسيارات بطريقة آمنة وصحية.",
        },
        {
          icon: "⏰",
          heading: "الموثوقية والجدولة المرنة",
          text: "نحن معروفون بالموثوقية والمرونة في جدولة خدمات التنظيف، سواء كانت تنظيف المنازل أو تنظيف الانتقال أو خدمات العاملات المنزلية في الكويت.",
        },
      ],
    },
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
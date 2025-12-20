import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Happy1 from './images/Happy1.png';
import Happy2 from './images/Happy2.png';
import Happy3 from './images/Happy3.png';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CustomerReviews.css";

const CustomerReviews = () => {
  const testimonials = [
    {
      img: Happy1,
      text: `“Having found Healthy Home UAE via Instagram, the pricing was clear and the team
      was very professional. AC duct cleaning was done perfectly…”`,
      name: "Chris Hammersley",
    },
    {
      img: Happy2,
      text: `“They arrived with all deep cleaning equipment. The team knows their job very well.
      I loved the result and will book again…”`,
      name: "Sevara Sattarova",
    },
    {
      img: Happy3,
      text: `“Ali and Dennis were thorough in pest control treatment. They asked questions and 
      tailored the solution professionally. Highly recommended!”`,
      name: "Steve C",
    },
  ];

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">What Our Happy Customers Say!</h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={25}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
        className="reviews-swiper"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="review-card">
              <img src={item.img} alt="Customer" className="review-img" />

              <div className="review-stars">★★★★★</div>

              <p className="review-text">{item.text}</p>

              <h4 className="review-name">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;

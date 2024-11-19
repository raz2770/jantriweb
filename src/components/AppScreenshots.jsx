import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./AppScreenshots.css";

const AppScreenshots = () => {
  const screenshots = [
    "screenshot1.png", // Replace with actual image paths
    "screenshot2.png",
    "screenshot3.png",
    "screenshot4.png",
    "screenshot5.png",
  ];

  return (
    <div className="screenshots-container">
      <h2>App Screenshots</h2>
      <p>Explore the app with a visual tour!</p>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Display 3 slides at a time
        loop={true}
        autoplay={{
          delay: 3000, // Change image every 3 seconds
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: false, // Disable shadows for a cleaner look
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="screenshots-carousel"
      >
        {screenshots.map((screenshot, index) => (
          <SwiperSlide key={index} className="screenshot-slide">
            <img src={screenshot} alt={`Screenshot ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppScreenshots;

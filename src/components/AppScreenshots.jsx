import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./AppScreenshots.css";

const AppScreenshots = () => {
  const screenshots = [
    "screenshot1.png",
    "screenshot2.png", 
    "screenshot3.png",
    "screenshot4.png",
    "screenshot5.png",
  ];

  return (
    <section className="screenshots-section" id="screenshots">
      <div className="screenshots-container">
        <div className="screenshots-header">
          <div className="screenshots-badge">
            Screenshots
          </div>
          <h2 className="screenshots-title">
            Experience the Interface
          </h2>
          <p className="screenshots-description">
            Explore our intuitive design and powerful features through 
            these interactive screenshots of the app.
          </p>
        </div>
        
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="screenshots-carousel"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {screenshots.map((screenshot, index) => (
            <SwiperSlide key={index} className="screenshot-slide">
              <img 
                src={screenshot} 
                alt={`App Screenshot ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AppScreenshots;

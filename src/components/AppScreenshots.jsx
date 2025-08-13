import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./AppScreenshots.css";

// Import screenshot images
import ss1 from "../assets/ss1.jpg";
import ss2 from "../assets/ss2.jpg";
import ss3 from "../assets/ss3.jpg";
import ss4 from "../assets/ss4.jpg";
import ss5 from "../assets/ss5.jpg";
import ss6 from "../assets/ss6.jpg";

const AppScreenshots = () => {
  const screenshots = [
    ss1,
    ss2, 
    ss3,
    ss4,
    ss5,
    ss6,
  ];

  return (
    <section className="screenshots-section" id="screenshots">
      <div className="screenshots-container">
        <div className="screenshots-header">
          <div className="screenshots-badge">
            स्क्रीनशॉट्स
          </div>
          <h2 className="screenshots-title">
            ऐप Interface का Preview
          </h2>
          <p className="screenshots-description">
            देखिये कैसे आसानी से manage करें clients, calculate करें Jantri, 
            aur maintain करें accurate financial records.
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

import React from "react";
import "./MobilePhone.css";

// Try both image paths
import phoneMockup1 from "../assets/phone_mockup.png";
import phoneMockup2 from "../assets/phone-mockup.png";

const MobilePhone = () => {
  const handleImageError = (e) => {
    console.error('Failed to load phone mockup image:', e);
    // Try the alternative filename
    if (e.target.src.includes('phone_mockup.png')) {
      e.target.src = phoneMockup2;
    } else {
      e.target.src = phoneMockup1;
    }
  };

  const handleImageLoad = () => {
    console.log('Phone mockup image loaded successfully');
  };

  return (
    <div className="phone-container scroll-reveal-scale">
      <div className="phone-glow"></div>
      <img
        src={phoneMockup1}
        alt="Jantri MS Sheet App - Sattaking Matka Results Calculator Mobile Interface"
        className="phone-mockup"
        loading="eager"
        onError={handleImageError}
        onLoad={handleImageLoad}
        title="Professional Jantri MS Sheet for Sattaking and Matka Analysis"
      />
      <div className="phone-highlights">
        <div className="highlight highlight-1"></div>
        <div className="highlight highlight-2"></div>
        <div className="highlight highlight-3"></div>
      </div>
    </div>
  );
};

export default MobilePhone;

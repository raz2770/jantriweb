import React from "react";
import "./DownloadSection.css";
import googlePlay from "../assets/google-play-icon.png";
import appStore from "../assets/app-store-icon.png";
import { trackDownload } from "../utils/analytics";

const DownloadSection = () => {
  const handleDownload = (platform) => {
    trackDownload(platform);
    // Replace with actual app store links
    const links = {
      'google-play': 'https://play.google.com/store/apps/details?id=com.jantri.mssheet',
      'app-store': 'https://apps.apple.com/app/jantri-ms-sheet/id123456789'
    };
    window.open(links[platform] || '#', '_blank');
  };

  return (
    <section className="download-section" id="download" itemScope itemType="https://schema.org/SoftwareApplication">
      <div className="download-container">
        <div className="download-badge">
          Download Free App
        </div>
        
        <h2 className="download-title" itemProp="name">
          Jantri MS Sheet App Download Kariye - Free!
        </h2>
        
        <p className="download-description" itemProp="description">
          Professional Jantri MS Sheet app download kariye aur accurate Sattaking results paiye. 
          Live charts, historical data, aur complete analysis tools apke mobile mein!
        </p>
        
        <div className="download-buttons">
          <button 
            className="download-button" 
            onClick={() => handleDownload('google-play')}
            aria-label="Download Jantri MS Sheet from Google Play Store"
          >
            <img src={googlePlay} alt="Download from Google Play Store" />
            <span>Google Play</span>
          </button>
          <button 
            className="download-button" 
            onClick={() => handleDownload('app-store')}
            aria-label="Download Jantri MS Sheet from Apple App Store"
          >
            <img src={appStore} alt="Download from Apple App Store" />
            <span>App Store</span>
          </button>
        </div>
        
        <div className="download-feature-list">
          <div className="download-feature">✅ Free Sattaking Results Daily</div>
          <div className="download-feature">✅ Live Matka Updates Instant</div>
          <div className="download-feature">✅ Professional Jantri Tools</div>
          <div className="download-feature">✅ 24/7 Expert Support Hindi Mein</div>
        </div>
        
        <div className="download-stats">
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Downloads</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.8★</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

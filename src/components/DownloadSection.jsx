import React from "react";
import "./DownloadSection.css";
import googlePlay from "../assets/google-play-icon.png";
import appStore from "../assets/app-store-icon.png";
import { trackDownload } from "../utils/analytics";

const APK_URL = "https://dl.dropboxusercontent.com/scl/fi/rhrb2csqcue14ww14vjlh/jantri.apk?rlkey=w3cnc5usipzqgwtvxvrqaq8dm&st=xbszv9m2&dl=1";

const DownloadSection = () => {
  const handleDownload = (platform) => {
    trackDownload(platform);
    window.open(APK_URL, '_blank');
  };

  return (
    <section className="download-section" id="download" itemScope itemType="https://schema.org/SoftwareApplication">
      <div className="download-container">
        <div className="download-badge">
          मुफ्त ऐप डाउनलोड करें
        </div>
        
        <h2 className="download-title" itemProp="name">
          Jantri TZ Sheet App डाउनलोड करें - मुफ्त!
        </h2>
        
        <p className="download-description" itemProp="description">
          Professional client management app डाउनलोड करें. Complete hisab-kitab, 
          Jantri calculations, aur accurate financial tracking आपके mobile में!
        </p>
        
        <div className="download-buttons">
          <button 
            className="download-button" 
            onClick={() => handleDownload('google-play')}
            aria-label="Download Jantri TZ Sheet from Google Play Store"
          >
            <img src={googlePlay} alt="Download from Google Play Store" />
            <span>Google Play</span>
          </button>
          <button 
            className="download-button" 
            onClick={() => handleDownload('app-store')}
            aria-label="Download Jantri TZ Sheet from Apple App Store"
          >
            <img src={appStore} alt="Download from Apple App Store" />
            <span>App Store</span>
          </button>
            <a
              className="download-button"
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Jantri APK for Android"
              download="jantri.apk"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span role="img" aria-label="Android">🤖</span>
              <span>Android APK</span>
            </a>
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

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
              href="https://www.dropbox.com/scl/fi/lpid4kkg91njnkwzehrgu/jantri.apk?rlkey=amo53fjkfsc0w2nhurvc9bqks&st=iju7rujo&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Jantri APK for Android"
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

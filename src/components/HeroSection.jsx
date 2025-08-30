import React from "react";
import "./HeroSection.css";

const APK_URL = "https://dl.dropboxusercontent.com/scl/fi/5upq8kkglkfjz10ah286z/jantri.apk?rlkey=n6h44iu89kl5ou4zdxda3mwzj&st=sg8zgfg2&dl=1";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">📊</span>
            <span>Trusted by 1000+ Clients</span>
          </div>
          
          <h1 className="hero-title">
            Jantri TZ Sheet
            <br />
            <span className="highlight">Client Account & Hisab Management</span>
          </h1>
          
          <p className="hero-description">
            Professional client account management, Jantri calculations aur accurate hisab-kitab. 
            Apke clients ka complete financial record aur profit-loss tracking ek jagah.
          </p>
          
          <div className="hero-actions">
            <button 
              className="hero-primary-btn"
              onClick={() => window.open(APK_URL, '_blank')}
            >
              <span className="btn-icon">📱</span>
              Download करें
            </button>
            <a
              className="hero-primary-btn"
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Jantri APK for Android"
              download="jantri.apk"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span className="btn-icon" role="img" aria-label="Android">🤖</span>
              <span>Android APK</span>
            </a>
            <button 
              className="hero-secondary-btn"
              onClick={() => scrollToSection("screenshots")}
            >
              <span className="btn-icon">👀</span>
              Screenshots देखें
            </button>
            <button 
              className="hero-secondary-btn"
              onClick={() => scrollToSection("contact")}
            >
              <span className="btn-icon">📞</span>
              संपर्क करें
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Clients Managed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">5.0★</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

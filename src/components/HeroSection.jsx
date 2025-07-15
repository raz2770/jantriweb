import React from "react";
import "./HeroSection.css";
import MobilePhone from "./MobilePhone";

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
            🎯 Trusted by 100K+ Users
          </div>
          
          <h1 className="hero-title">
            Jantri MS Sheet - <span className="highlight">Satta King & Matka</span> का बाप
          </h1>
          
          <p className="hero-description">
            Sabse fast Sattaking results, live Matka charts, Kalyan ki सही jodi aur 
            complete Jantri analysis. Apka trusted companion for professional matka calculations aur predictions.
          </p>
          
          <div className="hero-actions">
            <button 
              className="hero-primary-btn"
              onClick={() => scrollToSection("download")}
            >
              Download Now
            </button>
            <button 
              className="hero-secondary-btn"
              onClick={() => scrollToSection("features")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Explore Features
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8★</span>
              <span className="stat-label">App Rating</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <MobilePhone />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

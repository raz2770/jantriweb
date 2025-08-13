import React from "react";
import "./FeaturesSection.css";
import feature1 from "../assets/feature-icon1.png";
import feature2 from "../assets/feature-icon2.png";
import feature3 from "../assets/feature-icon3.png";

const FeaturesSection = () => {
  const features = [
    { 
      icon: feature1, 
      title: "Live Satta King Results", 
      description: "Sabse fast Sattaking aur Matka results with instant notification. Kalyan, Mumbai, aur sabhi major markets ka live update.",
      link: "#"
    },
    { 
      icon: feature2, 
      title: "Jantri Chart & Trick Analysis", 
      description: "Complete Jantri charts, historical data, aur advanced pattern analysis tools. सही jodi nikalne ke liye best tricks.",
      link: "#"
    },
    { 
      icon: feature3, 
      title: "TZ Sheet Calculator Pro", 
      description: "Professional TZ Sheet calculations with automated formulas, profit/loss tracking, aur detailed reports. पैसा double karne ka आसान tarika.",
      link: "#"
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <div className="features-badge">Top Features</div>
          <h2 className="features-title">Complete Satta King & Matka Solution</h2>
          <p className="features-description">
            Sattaking analysis, Matka calculations, aur comprehensive Jantri management 
            ke liye सब कुछ ek hi powerful app mein. पैसा kamane ka सही tarika!
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <a href={feature.link} className="feature-link">
                Learn More
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

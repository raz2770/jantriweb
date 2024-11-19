import React from "react";
import "./HeroSection.css";
import MobilePhone from "./MobilePhone";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1>Manage Clients, Effortlessly</h1>
        <p>Streamline your workflow and manage clients seamlessly with our app.</p>
        <div className="cta-buttons">
          <button className="cta-button">Download Now</button>
          <button className="cta-button">Explore Features</button>
        </div>
      </div>
      <MobilePhone />
    </section>
  );
};

export default HeroSection;

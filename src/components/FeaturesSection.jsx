import React from "react";
import "./FeaturesSection.css";
import feature1 from "../assets/feature-icon1.png";
import feature2 from "../assets/feature-icon2.png";
import feature3 from "../assets/feature-icon3.png";

const FeaturesSection = () => {
  const features = [
    { icon: feature1, title: "Manage Clients", description: "Effortlessly manage your client data with an intuitive interface." },
    { icon: feature2, title: "Secure Data", description: "Your data is encrypted and stored securely for peace of mind." },
    { icon: feature3, title: "Real-Time Sync", description: "Sync your data across devices in real-time without hassle." },
  ];

  return (
    <section className="features-section" id="features">
      <h2>App Features</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

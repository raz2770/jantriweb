import React from "react";
import "./PlansSection.css";

const PlansSection = () => {
  const plans = [
    { 
      duration: "शुरुआती प्लान", 
      price: "₹199", 
      period: "1 महीना",
      features: [
        "Professional client management",
        "Accurate Jantri calculations",
        "Complete hisab-kitab tracking",
        "Financial record maintenance",
        "Mobile app access"
      ]
    },
    { 
      duration: "व्यापार प्लान", 
      price: "₹499", 
      period: "3 महीने",
      features: [
        "Professional client management",
        "Accurate Jantri calculations",
        "Complete hisab-kitab tracking",
        "Financial record maintenance",
        "Mobile app access"
      ]
    },
    { 
      duration: "प्रोफेशनल प्लान", 
      price: "₹799", 
      period: "6 महीने",
      features: [
        "Professional client management",
        "Accurate Jantri calculations",
        "Complete hisab-kitab tracking",
        "Financial record maintenance",
        "Mobile app access"
      ]
    },
    { 
      duration: "एंटरप्राइज प्लान", 
      price: "₹1299", 
      period: "12 महीने",
      features: [
        "Professional client management",
        "Accurate Jantri calculations",
        "Complete hisab-kitab tracking",
        "Financial record maintenance",
        "Mobile app access"
      ]
    },
  ];

  const handleSubscribe = (planName) => {
    console.log(`Subscribing to ${planName} plan`);
    // Add subscription logic here
  };

  return (
    <section className="plans-section" id="plans">
      <div className="plans-container">
        <div className="plans-header">
          <div className="plans-badge">
            मूल्य योजनाएं
          </div>
          <h2 className="plans-title">
            अपना बिज़नेस प्लान चुनें
          </h2>
          <p className="plans-description">
            अपनी client management की जरूरतों के लिए perfect plan select करें. 
            Professional tools, accurate calculations, aur complete hisab-kitab solutions.
          </p>
        </div>
        
        <div className="plan-cards">
          {plans.map((plan, index) => (
            <div className="plan-card" key={index}>
              <h3 className="plan-duration">{plan.duration}</h3>
              <div className="plan-price">
                {plan.price}
                <span className="plan-price-period">/{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button 
                className="subscribe-button"
                onClick={() => handleSubscribe(plan.duration)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="plans-guarantee">
          <div className="guarantee-badge">
            30-Day Money Back Guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

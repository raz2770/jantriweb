import React from "react";
import "./PlansSection.css";

const PlansSection = () => {
  const plans = [
    { 
      duration: "Basic Plan", 
      price: "₹499", 
      period: "1 महीना",
      features: [
        "Daily Sattaking results aur tips",
        "Basic Jantri charts access",
        "Kalyan & Mumbai markets live",
        "Mobile app ka full access",
        "WhatsApp pe daily updates"
      ]
    },
    { 
      duration: "Premium Plan", 
      price: "₹999", 
      period: "3 महीने",
      features: [
        "All markets results (50+ markets)",
        "Advanced Jantri analysis & tricks",
        "MS Sheet calculator with formulas",
        "Historical data ka complete access",
        "Pattern recognition tools",
        "Priority support 24/7"
      ]
    },
    { 
      duration: "Professional Plan", 
      price: "₹1599", 
      period: "6 महीने",
      features: [
        "Complete market coverage sabhi ka",
        "Professional MS Sheet tools",
        "Custom chart generation facility",
        "Automated calculations automatic",
        "Export to Excel/PDF facility",
        "24/7 dedicated expert support",
        "VIP WhatsApp group access"
      ]
    },
    { 
      duration: "VIP Membership", 
      price: "₹2999", 
      period: "12 महीने",
      features: [
        "All Premium features included",
        "VIP market tips & guaranteed tricks",
        "Exclusive Jantri formulas secret",
        "Personal analyst support dedicated",
        "Custom MS Sheet templates ready",
        "Lifetime updates free forever",
        "Private VIP WhatsApp group access"
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
            Subscription Plans
          </div>
          <h2 className="plans-title">
            Apna Perfect Jantri Plan Choose Kariye
          </h2>
          <p className="plans-description">
            Apne Sattaking aur Matka analysis needs ke liye best plan select kariye. 
            Live results, comprehensive charts, aur professional MS Sheet tools ka access paiye.
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

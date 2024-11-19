import React from "react";
import "./PlansSection.css";

const PlansSection = () => {
  const plans = [
    { duration: "1 Month", price: "₹699" },
    { duration: "3 Months", price: "₹1599" },
    { duration: "6 Months", price: "₹2599" },
    { duration: "12 Months", price: "₹4099" },
  ];

  return (
    <section className="plans-section" id="plans">
      <h2>Choose Your Plan</h2>
      <div className="plan-cards">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3>{plan.duration}</h3>
            <p>{plan.price}</p>
            <button className="subscribe-button">Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;

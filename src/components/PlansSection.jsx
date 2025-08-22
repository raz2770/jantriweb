import React, { useCallback, useMemo, useState } from "react";
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

  // Map plan names to amounts in paise
  const planAmounts = useMemo(() => ({
    "शुरुआती प्लान": 19900,
    "व्यापार प्लान": 49900,
    "प्रोफेशनल प्लान": 79900,
    "एंटरप्राइज प्लान": 129900,
  }), []);

  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [selectedPlan, setSelectedPlan] = useState(plans[0].duration);
  const [busy, setBusy] = useState(false);

  const validate = useCallback(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyer.email);
    const phoneOk = /^\d{10}$/.test(buyer.phone.trim());
    const nameOk = buyer.name.trim().length >= 2;
    return emailOk && phoneOk && nameOk;
  }, [buyer]);

  const ensureRazorpay = () => {
    if (window && window.Razorpay) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existing) {
        existing.onload = () => resolve();
        existing.onerror = () => reject(new Error("Failed to load Razorpay"));
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Razorpay"));
      document.body.appendChild(script);
    });
  };

  const handleSubscribe = useCallback(async (planName) => {
    setSelectedPlan(planName);
    if (!validate()) {
      alert("कृपया नाम, 10-अंकों का मोबाइल और सही ईमेल दर्ज करें।");
      return;
    }

    const amount = planAmounts[planName];
    if (!amount) {
      alert("Invalid plan amount.");
      return;
    }

    const key = process.env.REACT_APP_RAZORPAY_KEY_ID || "";
    if (!key) {
      alert("Razorpay key missing. कृपया REACT_APP_RAZORPAY_KEY_ID सेट करें.");
      return;
    }

    setBusy(true);
    try {
      await ensureRazorpay();
    } catch (e) {
      console.error(e);
      alert("Payment library load failed. Please check your network and try again.");
      setBusy(false);
      return;
    }
    const options = {
  key,
      amount,
      currency: "INR",
      name: "Jantri TZ Sheet",
      description: `${planName} Subscription`,
      image: "/logo512.png",
      prefill: {
        name: buyer.name,
        email: buyer.email,
        contact: buyer.phone,
      },
      notes: { plan: planName },
      theme: { color: "#2563eb" },
      handler: function (response) {
        // TODO: verify on server: order_id / payment_id / signature
        console.log("Payment success:", response);
  alert("Payment successful! Order processing will begin.");
  setBusy(false);
      },
      modal: {
        ondismiss: function () {
          setBusy(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (resp) {
      console.error("Payment failed:", resp);
      alert("Payment failed. Please try again.");
      setBusy(false);
    });
    rzp.open();
  }, [buyer, planAmounts, validate]);

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
        
        {/* Buyer Info */}
        <div className="card" style={{ maxWidth: 640, margin: "0 auto var(--space-10)", textAlign: "left" }}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>अपनी जानकारी भरें</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="buyer-name" style={{ display: "block", marginBottom: 6 }}>नाम</label>
              <input
                id="buyer-name"
                type="text"
                value={buyer.name}
                onChange={(e) => setBuyer((b) => ({ ...b, name: e.target.value }))}
                placeholder="आपका नाम"
                style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--gray-300)" }}
              />
            </div>
            <div>
              <label htmlFor="buyer-email" style={{ display: "block", marginBottom: 6 }}>ईमेल</label>
              <input
                id="buyer-email"
                type="email"
                value={buyer.email}
                onChange={(e) => setBuyer((b) => ({ ...b, email: e.target.value }))}
                placeholder="name@example.com"
                style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--gray-300)" }}
              />
            </div>
            <div>
              <label htmlFor="buyer-phone" style={{ display: "block", marginBottom: 6 }}>मोबाइल (10 अंक)</label>
              <input
                id="buyer-phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                value={buyer.phone}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setBuyer((b) => ({ ...b, phone: digits }));
                }}
                placeholder="9876543210"
                style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid var(--gray-300)" }}
              />
            </div>
          </div>
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
                disabled={busy && selectedPlan === plan.duration}
              >
                {busy && selectedPlan === plan.duration ? "Processing..." : "Get Started"}
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

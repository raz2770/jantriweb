import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            24/7 सहायता उपलब्ध
          </div>
          <h2 className="contact-title">
            Client Management में मदद चाहिए?
          </h2>
          <p className="contact-description">
            Jantri calculations, TZ Sheet formulas, या किसी भी problem में कोई दिक्कत? 
            हमारे expert team से 24/7 बात करिये. Business management में मदद करेंगे!
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-method">
            <div className="contact-icon-wrapper">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>फ़ोन सपोर्ट</h3>
            <p>Client management, Jantri calculations, aur technical help के लिए direct call करिये.</p>
            <a href="tel:+916376431266" className="contact-link">
              +91 63764 31266
            </a>
          </div>

          <div className="contact-method">
            <div className="contact-icon-wrapper">
              <FaWhatsapp className="contact-icon" />
            </div>
            <h3>WhatsApp सपोर्ट</h3>
            <p>Quick help, account setup, aur business solutions WhatsApp पे पाइए.</p>
            <a
              href="https://wa.me/916376431266"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              WhatsApp पे संदेश करें
            </a>
          </div>

          <div className="contact-method">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>ईमेल सपोर्ट</h3>
            <p>Jantri formulas, TZ Sheet calculations, या subscription plans के बारे में detail में जानिये.</p>
            <a href="mailto:jantri@gmail.com" className="contact-link">
              jantri@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-stats">
          <div className="stat-item">
            <span className="stat-number">&lt;1hr</span>
            <span className="stat-label">Average Response</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Customer Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

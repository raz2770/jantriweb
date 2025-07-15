import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            24/7 मदद Available
          </div>
          <h2 className="contact-title">
            Sattaking & Matka Ki Koi Bhi Problem? हम हैं Na!
          </h2>
          <p className="contact-description">
            Jantri calculations, MS Sheet formulas, ya live results mein कोई dikkat? 
            Hamare expert team se 24/7 बात kariye. Satta King banane mein help करेंगे!
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-method">
            <div className="contact-icon-wrapper">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>Call Support</h3>
            <p>Jantri calculations, Matka results, aur technical help ke liye direct call kariye.</p>
            <a href="tel:+919057279546" className="contact-link">
              +91 90572 79546
            </a>
          </div>

          <div className="contact-method">
            <div className="contact-icon-wrapper">
              <FaWhatsapp className="contact-icon" />
            </div>
            <h3>WhatsApp Updates</h3>
            <p>Instant Sattaking results, Jantri tips, aur expert tricks WhatsApp pe paiye.</p>
            <a
              href="https://wa.me/9057279546"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              WhatsApp Group Join Kariye
            </a>
          </div>

          <div className="contact-method">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>Email Support</h3>
            <p>Jantri formulas, MS Sheet calculations, ya subscription plans ke baare mein detail mein jaaniye.</p>
            <a href="mailto:support@jantrimssheet.com" className="contact-link">
              support@jantrimssheet.com
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

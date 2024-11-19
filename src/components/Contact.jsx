import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing WhatsApp, Phone, and Envelope icons
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container"  id="contact">
      <h2>Contact For any Help</h2>
      <p>We're available 24/7 to assist you with any queries or issues.</p>

      <div className="contact-info">
        <div className="contact-method">
          <FaPhoneAlt className="contact-icon" />
          <h3>📞 Call Support</h3>
          <p>If you prefer to speak with someone, give us a call!</p>
          <a href="tel:+919057279546" className="contact-link">
            +919057279546
          </a>
        </div>

        <div className="contact-method">
          <FaWhatsapp className="contact-icon" />
          <h3>💬 WhatsApp Support</h3>
          <p>Chat with us on WhatsApp for instant assistance.</p>
          <a
            href="https://wa.me/9057279546"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-method">
          <FaEnvelope className="contact-icon" />
          <h3>✉️ Email Support</h3>
          <p>Have any questions? Email us anytime, and we'll get back to you.</p>
          <a href="mailto:support@myapp.com" className="contact-link">
            support@myapp.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

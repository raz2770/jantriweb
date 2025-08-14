import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("hero")} role="button" tabIndex="0">
          <img src={logo} alt="Jantri TZ Sheet" className="logo-image" />
          <span className="logo-text">Jantri TZ Sheet</span>
        </div>
        
        <ul className="navbar-links" role="menubar">
          <li onClick={() => scrollToSection("hero")} role="menuitem">Home</li>
          <li onClick={() => scrollToSection("screenshots")} role="menuitem">Screenshots</li>
          <li onClick={() => scrollToSection("download")} role="menuitem">Download</li>
          <li onClick={() => scrollToSection("plans")} role="menuitem">प्लान्स</li>
          <li onClick={() => scrollToSection("contact")} role="menuitem">संपर्क</li>
          <button 
            className="navbar-cta" 
            onClick={() => scrollToSection("download")}
            aria-label="Download Jantri TZ Sheet App"
          >
            शुरू करें
          </button>
        </ul>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li onClick={() => scrollToSection("hero")}>Home</li>
            <li onClick={() => scrollToSection("screenshots")}>Screenshots</li>
            <li onClick={() => scrollToSection("download")}>Download</li>
            <li onClick={() => scrollToSection("plans")}>प्लान्स</li>
            <li onClick={() => scrollToSection("contact")}>संपर्क</li>
          </ul>
          <button 
            className="navbar-cta" 
            onClick={() => scrollToSection("download")}
          >
            शुरू करें
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

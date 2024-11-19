import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        MS Sheet
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("download")}>Download</li>
        <li onClick={() => scrollToSection("plans")}>Plans</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

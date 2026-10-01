import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">BMW Experience</div>

      {/* Hamburger Toggle Button */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Navigation">
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Links Container */}
      <div className={`links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/cars" onClick={() => setIsOpen(false)}>Cars</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

        {/* Social Media Buttons inside Dropdown */}
        <div className="social-links">
          <a 
            href="https://instagram.com/bmw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn instagram"
          >
            Instagram
          </a>
          <a 
            href="https://facebook.com/bmw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn facebook"
          >
            Facebook
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
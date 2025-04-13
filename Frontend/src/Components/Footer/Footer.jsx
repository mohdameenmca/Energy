import React from 'react';
import './Footer.css'; // You can create a separate CSS file to style the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} EnergyCo. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about-us">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Logo_URL, BRAND_NAME, BRAND_TAGLINE } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="savora-footer">
      <div className="footer-top-banner savora-footer-banner">
        <div className="footer-banner-content">
          <span className="footer-gold-sparkle">⚜️</span>
          <h3>Elevate Your Dining Experience with the SAVORA VIP App</h3>
          <div className="app-download-badges">
            <span className="store-badge savora-store-badge">📱 Google Play</span>
            <span className="store-badge savora-store-badge">🍏 Apple App Store</span>
          </div>
        </div>
      </div>

      <div className="footer-main savora-footer-main">
        <div className="footer-col brand-col">
          <div className="footer-logo-row savora-logo-row">
            <img src={Logo_URL} alt="SAVORA Emblem" className="footer-savora-logo" />
            <div className="footer-brand-headings">
              <span className="footer-brand-name">{BRAND_NAME}</span>
              <span className="footer-brand-motto">{BRAND_TAGLINE}</span>
            </div>
          </div>
          <p className="footer-tagline">
            Curating Michelin-inspired dining experiences. Handcrafted by master chefs, sealed in thermal temperature locks, and delivered with royal speed.
          </p>
          <div className="footer-trust-marks">
            <span className="trust-badge">⭐ 4.9 Epicurean Standard</span>
            <span className="trust-badge">♨️ 25 Min Thermal Lock</span>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} SAVORA Gastronomy & Express Logistics Inc. All rights reserved.
          </p>
        </div>

        <div className="footer-col">
          <h4>The Maison</h4>
          <ul>
            <li><Link to="/about">Our Story & Heritage</Link></li>
            <li><a href="#signature-dishes">Chef's Tasting Menu</a></li>
            <li><a href="#thermal-seal">Thermal Delivery Tech</a></li>
            <li><a href="#private-dining">Private Dining & Events</a></li>
            <li><a href="#sustainability">Farm-to-Table Sourcing</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>VIP Concierge</h4>
          <ul>
            <li><Link to="/contact">Guest Concierge Desk</Link></li>
            <li><a href="#vip-club">SAVORA Privilege Club</a></li>
            <li><a href="#corporate">Executive Dining</a></li>
            <li><a href="#careers">Join Our Brigade</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Dining Hubs</h4>
          <ul>
            <li>Sector 17, Chandigarh (Flagship)</li>
            <li>Connaught Place, Delhi</li>
            <li>Indiranagar, Bangalore</li>
            <li>Bandra West, Mumbai</li>
            <li>Jubilee Hills, Hyderabad</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

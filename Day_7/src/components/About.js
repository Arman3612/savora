import React from "react";
import { Link } from "react-router-dom";
import { Logo_URL, BRAND_NAME, BRAND_TAGLINE } from "../utils/constants";

const About = () => {
  return (
    <div className="about-page savora-about-page">
      {/* Hero Section */}
      <div className="about-hero savora-about-hero">
        <img src={Logo_URL} alt="SAVORA Crest" className="about-hero-crest" />
        <span className="about-badge savora-badge-gold">THE SAVORA MANIFESTO</span>
        <h1>Artisanal Haute Gastronomy Meets Royal Speed ⚜️</h1>
        <p className="about-hero-sub">
          SAVORA was born out of an uncompromising obsession: that dining at home should rival the sensory ecstasy of a three-star Michelin tasting room.
        </p>
      </div>

      {/* Stats Counter */}
      <div className="about-stats-grid savora-stats-grid">
        <div className="stat-card savora-stat-card">
          <h3>4.9 ★</h3>
          <p>Epicurean Quality Rating</p>
        </div>
        <div className="stat-card savora-stat-card">
          <h3>25 Mins</h3>
          <p>Thermal Delivery Guarantee</p>
        </div>
        <div className="stat-card savora-stat-card">
          <h3>100%</h3>
          <p>Organic & Farm-Fresh</p>
        </div>
        <div className="stat-card savora-stat-card">
          <h3>6 Stages</h3>
          <p>Culinary Precision Protocol</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="about-features savora-about-features">
        <h2>The Pillars of the SAVORA Experience</h2>
        <div className="features-grid savora-pillars-grid">
          <div className="feature-box savora-feature-card">
            <span className="feature-icon">👨‍🍳</span>
            <h3>Master Chef Brigades</h3>
            <p>
              Each signature recipe is curated by veteran culinary artisans, utilizing French sous-vide techniques, heritage charcoal grills, and slow dum-steaming.
            </p>
          </div>

          <div className="feature-box savora-feature-card">
            <span className="feature-icon">♨️</span>
            <h3>Patented Thermal Insulation</h3>
            <p>
              Our multi-layered temperature-locking packaging prevents steam condensation while locking in core temperatures at an optimal 68°C until the moment you unseal it.
            </p>
          </div>

          <div className="feature-box savora-feature-card">
            <span className="feature-icon">⚡</span>
            <h3>White-Glove Express Transit</h3>
            <p>
              Dedicated single-order couriers ensure that your meal never waits. Dispatched the precise second it leaves the chef's pass.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="about-cta savora-about-cta">
        <span className="cta-gold-sparkle">⚜️</span>
        <h2>Your private culinary journey awaits</h2>
        <p>Order now and taste the difference of uncompromising gourmet perfection.</p>
        <Link to="/" className="about-order-btn savora-gold-btn">
          Explore The Signature Menu Now →
        </Link>
      </div>
    </div>
  );
};

export default About;

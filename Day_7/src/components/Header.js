import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";
import { BACKEND_BASE_URL, Logo_URL, BRAND_NAME, BRAND_TAGLINE } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [userName, setUserName] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginInput, setLoginInput] = useState("");
  const [selectedCity, setSelectedCity] = useState("Sector 17, Chandigarh");
  const [showCityPicker, setShowCityPicker] = useState(false);
  const [backendStatus, setBackendStatus] = useState("checking");
  const { cartCount } = useCart();

  // Check if backend proxy is running
  useEffect(() => {
    fetch(`${BACKEND_BASE_URL}/health`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setBackendStatus("online");
        } else {
          setBackendStatus("offline");
        }
      })
      .catch(() => {
        setBackendStatus("offline");
      });
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginInput.trim()) {
      setUserName(loginInput.trim());
      setBtnNameReact("Logout");
      setShowLoginModal(false);
    }
  };

  const handleAuthClick = () => {
    if (btnNameReact === "Logout") {
      setUserName(null);
      setBtnNameReact("Login");
    } else {
      setShowLoginModal(true);
    }
  };

  const cities = [
    "Sector 17, Chandigarh",
    "Connaught Place, Delhi",
    "Indiranagar, Bangalore",
    "Bandra West, Mumbai",
    "Jubilee Hills, Hyderabad"
  ];

  return (
    <header className="header savora-header">
      <div className="header-inner">
        {/* Logo & Location */}
        <div className="header-left">
          <Link to="/" className="brand-link savora-brand-link">
            <div className="savora-brand-logo-wrap">
              <img
                src={Logo_URL}
                alt="SAVORA Logo"
                className="savora-header-logo"
              />
              <div className="savora-brand-text">
                <span className="brand-name savora-brand-title">{BRAND_NAME}</span>
                <span className="brand-tagline savora-tagline-small">{BRAND_TAGLINE}</span>
              </div>
            </div>
          </Link>

          {/* Location Selector Dropdown */}
          <div className="location-container">
            <button
              className="location-btn savora-location-btn"
              onClick={() => setShowCityPicker(!showCityPicker)}
              title="Select Dining Region"
            >
              <span className="loc-label">📍 Dining Hub:</span>
              <span className="loc-city">{selectedCity}</span>
              <span className="loc-arrow">▾</span>
            </button>

            {showCityPicker && (
              <div className="location-dropdown savora-dropdown">
                <p className="dropdown-title">Select SAVORA Hub</p>
                {cities.map((city, idx) => (
                  <div
                    key={idx}
                    className={`dropdown-item ${selectedCity === city ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCity(city);
                      setShowCityPicker(false);
                    }}
                  >
                    ⚜️ {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Backend & CORS Protection Indicator */}
        <div className="backend-indicator">
          {backendStatus === "online" ? (
            <span className="status-pill status-online" title="SAVORA Real-time Kitchen & Delivery Proxy Online">
              <span className="status-dot"></span> Live Kitchens Connected
            </span>
          ) : (
            <span className="status-pill status-cached" title="SAVORA Resilient Offline Kitchen Menu Active">
              <span className="status-dot"></span> Gourmet Reserve Active
            </span>
          )}
        </div>

        {/* Nav Links */}
        <nav className="nav-items">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                <span className="nav-icon">🍽️</span> Menu & Dining
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <span className="nav-icon">⚜️</span> Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                <span className="nav-icon">💬</span> Concierge
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link cart-link">
                <span className="nav-icon">🛎️</span>
                <span>Cart</span>
                <span className={`cart-badge ${cartCount > 0 ? "has-items" : ""}`}>
                  {cartCount}
                </span>
              </Link>
            </li>
            <li>
              <button className="auth-btn savora-auth-btn" onClick={handleAuthClick}>
                {btnNameReact === "Logout" ? (
                  <span className="user-profile">
                    ⚜️ <b>{userName || "Guest"}</b> (Logout)
                  </span>
                ) : (
                  <span>⚜️ VIP Sign In</span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="login-modal savora-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <span className="modal-badge-gold">SAVORA PRIVILEGE</span>
                <h3>VIP Guest Access</h3>
              </div>
              <button className="close-btn" onClick={() => setShowLoginModal(false)}>
                ✕
              </button>
            </div>
            <p className="modal-sub">
              Sign in to unlock personalized chef's recommendations, priority dispatch, and complimentary gourmet perks.
            </p>
            <form onSubmit={handleLoginSubmit} className="login-form">
              <input
                type="text"
                placeholder="Enter your Name (e.g. Arman Khan)"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                required
                autoFocus
              />
              <button type="submit" className="login-submit-btn savora-gold-btn">
                Enter SAVORA Dining Room →
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
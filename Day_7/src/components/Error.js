import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { Logo_URL, BRAND_NAME } from "../utils/constants";

const Error = () => {
  const err = useRouteError();
  const statusCode = err?.status || err?.statusCode || 404;
  const statusMessage = err?.statusText || err?.message || "The requested dining room or delicacy could not be found.";

  return (
    <div className="savora-error-page">
      <div className="error-card savora-error-card">
        <div className="error-brand-header">
          <img src={Logo_URL} alt={BRAND_NAME} className="error-logo" />
          <span className="savora-badge-gold">SAVORA CONCIERGE NOTICE</span>
        </div>

        <div className="error-status-badge">
          <span className="status-num">{statusCode}</span>
          <span className="status-label">CULINARY ROUTE EXCEPTION</span>
        </div>

        <h1 className="error-title">Refined Taste Takes a Slight Detour ⚜️</h1>
        <p className="error-detail">{statusMessage}</p>
        <p className="error-sub">
          The delicacy, kitchen, or page you were navigating toward is currently unavailable or being refined by our master chef brigades.
        </p>

        <div className="error-actions">
          <Link to="/" className="savora-gold-btn error-btn-primary">
            Return to Grand Dining Room →
          </Link>
          <Link to="/contact" className="savora-outline-btn error-btn-secondary">
            Connect with Concierge 💬
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;


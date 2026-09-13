import React from "react";
import { getImageSrc } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const info = resData?.info || {};
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    locality,
    areaName,
    sla = {},
    aggregatedDiscountInfoV3,
    veg
  } = info;

  const imgSrc = getImageSrc(cloudinaryImageId);
  const discountText = aggregatedDiscountInfoV3?.header
    ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader || ""}`
    : null;

  return (
    <Link to={`/restaurant/${id}`} className="res-card-link savora-card-link">
      <div className="res-card savora-res-card">
        <div className="res-img-container savora-img-container">
          <img
            className="res-logo savora-card-img"
            alt={name || "Gourmet Kitchen"}
            src={imgSrc}
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80";
            }}
          />
          <div className="res-img-overlay savora-overlay"></div>
          {discountText && (
            <div className="res-discount-badge savora-discount-badge">
              <span className="discount-tag-icon">⚜️</span> {discountText}
            </div>
          )}
          {veg && (
            <div className="res-veg-badge savora-veg-badge" title="Certified Pure Veg Kitchen">
              <span className="veg-dot"></span> Pure Veg
            </div>
          )}
        </div>

        <div className="res-content savora-res-content">
          <div className="res-header-row">
            <h3 className="res-name savora-title" title={name}>{name}</h3>
          </div>
          
          <div className="res-meta-row savora-meta-row">
            <span className={`rating-badge savora-rating ${avgRating >= 4.0 ? "high-rating" : "medium-rating"}`}>
              <span className="star-icon">★</span> {avgRating || "4.2"}
            </span>
            <span className="meta-separator">•</span>
            <span className="sla-time savora-sla">
              ⚡ {sla.slaString || `${sla.deliveryTime || "25"} mins`}
            </span>
            <span className="meta-separator">•</span>
            <span className="distance-tag">
              {sla.lastMileTravelString || "2.0 km"}
            </span>
          </div>

          <p className="res-cuisines savora-cuisines" title={cuisines.join(", ")}>
            {cuisines.slice(0, 3).join(" • ")}{cuisines.length > 3 ? "..." : ""}
          </p>

          <div className="res-footer-row savora-footer-row">
            <span className="res-locality">
              📍 {locality || areaName || "Sector 17, Chandigarh"}
            </span>
            <span className="res-cost savora-cost">
              {costForTwo || "₹350 for two"}
            </span>
          </div>

          <div className="res-quick-cta savora-quick-cta">
            <span>View Haute Menu & Tasting Notes →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
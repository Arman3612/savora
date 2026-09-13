import React, { useEffect, useRef, useState } from "react";
import { getImageSrc } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantMap = ({ restaurants = [], initialCenter = { lat: 30.7339, lng: 76.7889 } }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [userLocation, setUserLocation] = useState(initialCenter);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    if (!window.L || !mapContainerRef.current) return;

    // Check if map instance already exists
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Leaflet Map
    const map = window.L.map(mapContainerRef.current, {
      zoomControl: false
    }).setView([userLocation.lat, userLocation.lng], 13);

    // Zoom control at bottom-right
    window.L.control.zoom({ position: "bottomright" }).addTo(map);

    // Free OpenStreetMap Tile Layer
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    mapInstanceRef.current = map;

    // User Location Marker (Blue Pulsing Pin)
    const userIcon = window.L.divIcon({
      className: "user-location-marker",
      html: `<div class="user-pulse-dot"></div><div class="user-pulse-ring"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const userMarker = window.L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
      .addTo(map)
      .bindPopup("<b>📍 Your Location</b><br/>Delivering to your doorstep");

    markersRef.current.push(userMarker);

    // Custom Swiggy Orange Restaurant Marker Icon
    const createRestaurantIcon = (rating) => {
      return window.L.divIcon({
        className: "custom-res-marker",
        html: `
          <div class="marker-pin">
            <span class="marker-emoji">🍔</span>
            <span class="marker-rating">★ ${rating || 4.2}</span>
          </div>
        `,
        iconSize: [44, 44],
        iconAnchor: [22, 40]
      });
    };

    // Plot Restaurant Pins
    restaurants.forEach((res) => {
      const info = res?.info;
      if (!info) return;

      const lat = info.lat || (userLocation.lat + (Math.random() - 0.5) * 0.04);
      const lng = info.lng || (userLocation.lng + (Math.random() - 0.5) * 0.04);

      const marker = window.L.marker([lat, lng], {
        icon: createRestaurantIcon(info.avgRating)
      }).addTo(map);

      const imgSrc = getImageSrc(info.cloudinaryImageId);
      const cuisinesText = (info.cuisines || []).slice(0, 3).join(", ");
      const discount = info.aggregatedDiscountInfoV3?.header
        ? `${info.aggregatedDiscountInfoV3.header} ${info.aggregatedDiscountInfoV3.subHeader || ""}`
        : "Free Delivery";

      const popupHtml = `
        <div class="map-popup-card">
          <div class="popup-img-wrap">
            <img src="${imgSrc}" alt="${info.name}" class="popup-img" />
            <span class="popup-badge">${discount}</span>
          </div>
          <div class="popup-content">
            <h4 class="popup-title">${info.name}</h4>
            <p class="popup-cuisines">${cuisinesText}</p>
            <div class="popup-meta">
              <span class="popup-rating">⭐ ${info.avgRating}</span>
              <span class="popup-dot">•</span>
              <span class="popup-time">⚡ ${info.sla?.slaString || "25 mins"}</span>
              <span class="popup-dot">•</span>
              <span class="popup-dist">📍 ${info.sla?.lastMileTravelString || "2.1 km"}</span>
            </div>
            <a href="/restaurant/${info.id}" class="popup-order-btn">View Menu & Order →</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 280, className: "swiggy-custom-popup" });
      
      marker.on("click", () => {
        setSelectedRestaurant(info);
      });

      markersRef.current.push(marker);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [restaurants, userLocation]);

  // Geolocation trigger
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const newCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        setUserLocation(newCoords);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.flyTo([newCoords.lat, newCoords.lng], 14, {
            duration: 1.5
          });
        }
      },
      (err) => {
        setLocating(false);
        console.warn("Geolocation denied or unavailable:", err.message);
        alert("Could not fetch current GPS location. Centering on Chandigarh.");
      },
      { timeout: 8000 }
    );
  };

  return (
    <div className="map-wrapper">
      <div className="map-toolbar">
        <div className="map-toolbar-left">
          <span className="map-badge">Free Maps API</span>
          <h3 className="map-heading">Explore Nearby Restaurants on Live Map</h3>
          <p className="map-subheading">
            Showing {restaurants.length} kitchens around <b>{userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}</b>
          </p>
        </div>
        <div className="map-toolbar-actions">
          <button
            className="locate-btn"
            onClick={handleLocateMe}
            disabled={locating}
            title="Use current GPS position"
          >
            {locating ? "Locating..." : "📍 Locate Near Me"}
          </button>
        </div>
      </div>

      <div className="map-container-frame">
        <div id="swiggy-map" ref={mapContainerRef} className="leaflet-map-element"></div>
      </div>

      <div className="map-footer-hint">
        💡 <span>Click any restaurant marker on the map to see distance, discounts, and order delicious food directly. Powered by OpenStreetMap & Leaflet.</span>
      </div>
    </div>
  );
};

export default RestaurantMap;

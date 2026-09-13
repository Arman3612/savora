import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantMap from "./RestaurantMap";
import Shimmer from "./Shimmer";
import HeroShowcase from "./HeroShowcase";
import resList from "../utils/mockdata";
import { BACKEND_BASE_URL, FOOD_CATEGORIES, DEFAULT_LOCATION } from "../utils/constants";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'map' | 'both'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      // 1. Try enhanced backend proxy (completely free of CORS issues)
      const response = await fetch(
        `${BACKEND_BASE_URL}/restaurants?lat=${DEFAULT_LOCATION.lat}&lng=${DEFAULT_LOCATION.lng}`
      );

      if (response.ok) {
        const json = await response.json();
        const restaurants =
          json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants && restaurants.length > 0) {
          setAllRestaurants(restaurants);
          setFilteredRestaurants(restaurants);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn("Backend proxy not running or unreachable. Falling back to resilient mock dataset:", err.message);
    }

    // 2. Resilient local fallback (guarantees zero broken screens)
    setAllRestaurants(resList);
    setFilteredRestaurants(resList);
    setLoading(false);
  };

  // Search logic
  const handleSearch = (text) => {
    setSearchText(text);
    applyFilters(text, activeFilter, selectedCategory);
  };

  // Filter selection logic
  const handleFilterClick = (filterType) => {
    const newFilter = activeFilter === filterType ? "all" : filterType;
    setActiveFilter(newFilter);
    applyFilters(searchText, newFilter, selectedCategory);
  };

  // Food category pill click
  const handleCategoryClick = (catName) => {
    const newCat = selectedCategory === catName ? null : catName;
    setSelectedCategory(newCat);
    applyFilters(searchText, activeFilter, newCat);
  };

  // Unified Filter Application
  const applyFilters = (query, filterType, category) => {
    let result = [...allRestaurants];

    // Search query
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (res) =>
          res.info.name.toLowerCase().includes(q) ||
          res.info.cuisines.some((c) => c.toLowerCase().includes(q)) ||
          (res.info.areaName && res.info.areaName.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (category) {
      result = result.filter((res) =>
        res.info.cuisines.some((c) =>
          c.toLowerCase().includes(category.toLowerCase().replace("s", ""))
        )
      );
    }

    // Secondary filters
    switch (filterType) {
      case "top_rated":
        result = result.filter((res) => parseFloat(res.info.avgRating) >= 4.3);
        break;
      case "fast_delivery":
        result = result.filter((res) => (res.info.sla?.deliveryTime || 30) <= 25);
        break;
      case "pure_veg":
        result = result.filter((res) => res.info.veg === true);
        break;
      case "deals":
        result = result.filter((res) => res.info.aggregatedDiscountInfoV3?.header);
        break;
      case "budget":
        result = result.filter((res) => (res.info.costForTwoNumeric || 400) <= 350);
        break;
      default:
        break;
    }

    setFilteredRestaurants(result);
  };

  const handleResetFilters = () => {
    setSearchText("");
    setActiveFilter("all");
    setSelectedCategory(null);
    setFilteredRestaurants(allRestaurants);
  };

  const scrollToMenu = () => {
    const el = document.getElementById("savora-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMap = () => {
    setViewMode("map");
    const el = document.getElementById("savora-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="savora-body">
      {/* SAVORA Hero Showcase: Video plays once, then loops 6 photos in 1-second intervals */}
      <HeroShowcase onExploreMenu={scrollToMenu} onExploreMap={scrollToMap} />

      {/* Gourmet Categories Carousel */}
      <section className="food-categories-section savora-categories-section">
        <div className="section-header">
          <div className="section-title-wrap">
            <span className="gold-subtitle-badge">CHEF'S CURATED PALETTE</span>
            <h2>Epicurean Cravings & Specialties</h2>
          </div>
          <span className="section-hint">Crafted daily using farm-fresh, premium ingredients</span>
        </div>
        <div className="categories-carousel">
          {FOOD_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`category-item savora-cat-item ${selectedCategory === cat.name ? "active-category" : ""}`}
              onClick={() => handleCategoryClick(cat.name)}
              title={`Filter by ${cat.name}`}
            >
              <div className="category-img-wrap">
                <img src={cat.image} alt={cat.name} className="category-img" />
                <div className="cat-hover-overlay">
                  <span>Explore</span>
                </div>
              </div>
              <span className="category-label">{cat.name}</span>
              {cat.subtitle && <span className="category-sub">{cat.subtitle}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Royal Privilege Banners */}
      <section className="offers-banner-strip savora-ribbon-strip">
        <div className="banner-item savora-gold-ribbon">
          <div className="banner-text">
            <span className="banner-tag">⚜️ ROYAL WELCOME OFFER</span>
            <h3>Flat 50% OFF on Signature Delicacies</h3>
            <p>Complimentary packaging on your first order with code <strong>SAVORA50</strong></p>
          </div>
          <span className="banner-art">🍲</span>
        </div>
        <div className="banner-item savora-green-ribbon">
          <div className="banner-text">
            <span className="banner-tag">⚡ EXPRESS THERMAL LOCK</span>
            <h3>Guaranteed Piping Hot Under 25 Mins</h3>
            <p>Special insulated packaging retains optimal restaurant temperature</p>
          </div>
          <span className="banner-art">⚜️</span>
        </div>
      </section>

      {/* Main Controls: Search & Filters Bar */}
      <section className="controls-section savora-controls" id="savora-catalog">
        <div className="controls-row-top">
          {/* Search Box */}
          <div className="search-box-wrapper savora-search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search SAVORA delicacies, gourmet kitchens, or artisan dishes..."
              className="search-input"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchText && (
              <button
                className="search-clear-btn"
                onClick={() => handleSearch("")}
                title="Clear Search"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Mode Switcher */}
          <div className="view-mode-toggle savora-toggle">
            <button
              className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              🍽️ Dining Cards
            </button>
            <button
              className={`view-toggle-btn ${viewMode === "map" ? "active" : ""}`}
              onClick={() => setViewMode("map")}
            >
              🗺️ Kitchen Map
            </button>
            <button
              className={`view-toggle-btn ${viewMode === "both" ? "active" : ""}`}
              onClick={() => setViewMode("both")}
            >
              ⚡ Split View
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills-row savora-pills-row">
          <button
            className={`filter-pill savora-pill ${activeFilter === "all" && !selectedCategory ? "active" : ""}`}
            onClick={handleResetFilters}
          >
            All Gourmet Kitchens
          </button>
          <button
            className={`filter-pill savora-pill ${activeFilter === "top_rated" ? "active" : ""}`}
            onClick={() => handleFilterClick("top_rated")}
          >
            ⭐ Top Rated 4.3+
          </button>
          <button
            className={`filter-pill savora-pill ${activeFilter === "fast_delivery" ? "active" : ""}`}
            onClick={() => handleFilterClick("fast_delivery")}
          >
            ⚡ Express Delivery (&lt;25m)
          </button>
          <button
            className={`filter-pill savora-pill ${activeFilter === "pure_veg" ? "active" : ""}`}
            onClick={() => handleFilterClick("pure_veg")}
          >
            🟢 Pure Gourmet Veg
          </button>
          <button
            className={`filter-pill savora-pill ${activeFilter === "deals" ? "active" : ""}`}
            onClick={() => handleFilterClick("deals")}
          >
            🏷️ Royal Privileges
          </button>
          <button
            className={`filter-pill savora-pill ${activeFilter === "budget" ? "active" : ""}`}
            onClick={() => handleFilterClick("budget")}
          >
            💰 Curated Under ₹350
          </button>
          {(activeFilter !== "all" || selectedCategory || searchText) && (
            <button className="filter-pill reset-pill savora-reset-pill" onClick={handleResetFilters}>
              Reset Filters ↺
            </button>
          )}
        </div>
      </section>

      {/* Map View Display */}
      {(viewMode === "map" || viewMode === "both") && (
        <section className="live-map-section savora-map-section">
          <RestaurantMap
            restaurants={filteredRestaurants}
            initialCenter={DEFAULT_LOCATION}
          />
        </section>
      )}

      {/* Restaurant Cards Grid Display */}
      {(viewMode === "grid" || viewMode === "both") && (
        <section className="restaurants-section savora-restaurants-section">
          <div className="restaurants-section-title">
            <div>
              <span className="gold-subtitle-badge">SAVORA CERTIFIED PARTNERS</span>
              <h2>Gourmet Kitchens with White-Glove Delivery in Chandigarh</h2>
            </div>
            <span className="count-tag savora-count-tag">
              {filteredRestaurants.length} {filteredRestaurants.length === 1 ? "kitchen" : "kitchens"} available
            </span>
          </div>

          {filteredRestaurants.length === 0 ? (
            <div className="no-results-box savora-no-results">
              <div className="no-results-icon">⚜️</div>
              <h3>No matching gourmet kitchens found</h3>
              <p>We couldn't find any dishes matching "{searchText}". Try exploring other artisanal cuisines or reset your filters.</p>
              <button className="reset-btn savora-gold-btn" onClick={handleResetFilters}>
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="res-container savora-grid">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.info.id}
                  resData={restaurant}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Body;
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BACKEND_BASE_URL, getImageSrc } from "../utils/constants";
import resList from "../utils/mockdata";
import { useCart } from "../utils/CartContext";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vegOnly, setVegOnly] = useState(false);
  const { cartItems, addToCart, updateQuantity, cartCount, cartTotal } = useCart();

  useEffect(() => {
    fetchRestaurantMenu();
  }, [resId]);

  const fetchRestaurantMenu = async () => {
    setLoading(true);
    try {
      // Try backend proxy first (CORS safe)
      const res = await fetch(`${BACKEND_BASE_URL}/menu/${resId}`);
      if (res.ok) {
        const json = await res.json();
        if (json?.data) {
          processMenuData(json.data);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn("Backend proxy offline or unreachable, using rich local menu fallback:", err.message);
    }

    // Local fallback
    loadLocalFallback();
    setLoading(false);
  };

  const processMenuData = (data) => {
    // If backend provided structured menu
    if (data.restaurant && data.categories) {
      setResInfo(data.restaurant);
      setCategories(data.categories);
      return;
    }

    // If it's live Swiggy DAPI payload
    const restaurantInfo = data?.cards?.find(
      (c) => c?.card?.card?.["@type"]?.includes("food.v2.Restaurant")
    )?.card?.card?.info;

    if (restaurantInfo) {
      setResInfo({
        id: restaurantInfo.id,
        name: restaurantInfo.name,
        cuisines: restaurantInfo.cuisines,
        areaName: restaurantInfo.areaName,
        avgRating: restaurantInfo.avgRating,
        totalRatings: restaurantInfo.totalRatingsString,
        costForTwoMessage: restaurantInfo.costForTwoMessage,
        sla: restaurantInfo.sla
      });
    }

    // Find grouped regular cards
    const regularCards = data?.cards?.find(
      (c) => c?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    if (regularCards) {
      const itemCategories = regularCards
        .filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        .map((c) => c?.card?.card);

      if (itemCategories.length > 0) {
        setCategories(itemCategories);
        return;
      }
    }

    loadLocalFallback();
  };

  const loadLocalFallback = () => {
    const matched = resList.find((r) => r.info.id === resId);
    const info = matched ? matched.info : resList[0].info;

    setResInfo({
      id: info.id,
      name: info.name,
      cuisines: info.cuisines,
      areaName: info.locality || info.areaName,
      avgRating: info.avgRating,
      totalRatings: info.totalRatingsString,
      costForTwoMessage: info.costForTwo,
      sla: info.sla
    });

    setCategories([
      {
        title: "Recommended (Top Picks)",
        itemCards: [
          {
            card: {
              info: {
                id: `${info.id}-101`,
                name: `Chef's Special ${info.name} Platter`,
                price: 29900,
                description: "Delightful assortment of our bestselling flavors, cooked fresh with premium spices and herbs.",
                imageId: info.cloudinaryImageId,
                isVeg: info.veg ? 1 : 0,
                rating: 4.6,
                ratingCount: 1250
              }
            }
          },
          {
            card: {
              info: {
                id: `${info.id}-102`,
                name: "Crispy Sizzler Combo",
                price: 24900,
                description: "Golden crispy appetizers served with house signature dips and refreshing mint garnish.",
                imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4f9bb48e-82df-474b-8d71-cb12703bba30_772030.JPG",
                isVeg: 1,
                rating: 4.4,
                ratingCount: 840
              }
            }
          },
          {
            card: {
              info: {
                id: `${info.id}-103`,
                name: "Gourmet Meal Box for One",
                price: 34900,
                description: "Complete wholesome meal packed with authentic taste, savory side dish, and artisanal sauce.",
                imageId: "euwwcssmiewn2cpq7xww",
                isVeg: 0,
                rating: 4.7,
                ratingCount: 2100
              }
            }
          }
        ]
      },
      {
        title: "Breads, Sides & Beverages",
        itemCards: [
          {
            card: {
              info: {
                id: `${info.id}-104`,
                name: "Seasoned Herb Wedges & Dip",
                price: 13900,
                description: "Crispy skin-on potato wedges sprinkled with Mediterranean herbs and cheesy garlic mayonnaise.",
                imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
                isVeg: 1,
                rating: 4.3,
                ratingCount: 520
              }
            }
          },
          {
            card: {
              info: {
                id: `${info.id}-105`,
                name: "Signature Chilled Cooler",
                price: 9900,
                description: "Refreshing cooler with crushed iced citrus, real fruit pulp, and fragrant mint leaves.",
                imageId: "e1a0833bdc40ad1f6fe3185f102c9382",
                isVeg: 1,
                rating: 4.5,
                ratingCount: 390
              }
            }
          }
        ]
      }
    ]);
  };

  if (loading) {
    return (
      <div className="menu-container">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="menu-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-nav">
        <Link to="/">Home</Link> <span>/</span>{" "}
        <span className="breadcrumb-curr">{resInfo?.name || "Restaurant"}</span>
      </div>

      {/* Restaurant Header Card */}
      <div className="restaurant-header-card">
        <div className="res-info-main">
          <h1 className="res-header-title">{resInfo?.name}</h1>
          <p className="res-header-cuisines">
            {(resInfo?.cuisines || []).join(", ")}
          </p>
          <p className="res-header-locality">
            📍 {resInfo?.areaName || "City Center"}, {resInfo?.sla?.lastMileTravelString || "2.1 km away"}
          </p>
          <div className="res-header-time-cost">
            <span className="time-tag">⚡ {resInfo?.sla?.slaString || "25-30 mins"}</span>
            <span className="dot-divider">•</span>
            <span className="cost-tag">{resInfo?.costForTwoMessage || "₹350 for two"}</span>
          </div>
        </div>

        <div className="res-rating-box">
          <div className="rating-score">
            <span className="star">★</span> {resInfo?.avgRating || "4.3"}
          </div>
          <div className="rating-count">
            {resInfo?.totalRatings || "5K+ ratings"}
          </div>
        </div>
      </div>

      {/* Deals & Offers Banner */}
      <div className="restaurant-offers-strip">
        <div className="offer-pill">
          <span className="offer-icon">🏷️</span>
          <div>
            <strong>50% OFF UPTO ₹100</strong>
            <small>USE SWIGGYIT | ABOVE ₹199</small>
          </div>
        </div>
        <div className="offer-pill">
          <span className="offer-icon">⚡</span>
          <div>
            <strong>FREE DELIVERY</strong>
            <small>ON ORDERS ABOVE ₹149</small>
          </div>
        </div>
        <div className="offer-pill">
          <span className="offer-icon">💳</span>
          <div>
            <strong>FLAT ₹50 CASHBACK</strong>
            <small>WITH CRED / UPI</small>
          </div>
        </div>
      </div>

      {/* Veg Only Toggle Filter */}
      <div className="menu-controls-bar">
        <button
          className={`veg-toggle-btn ${vegOnly ? "active" : ""}`}
          onClick={() => setVegOnly(!vegOnly)}
        >
          <span className="veg-indicator-box"></span> Veg Only
        </button>
        <span className="menu-item-count">
          Showing delicious chef selections
        </span>
      </div>

      {/* Categories & Dish Items */}
      <div className="menu-categories-list">
        {categories.map((category, catIdx) => {
          const filteredItems = (category.itemCards || []).filter((item) => {
            if (!vegOnly) return true;
            return item?.card?.info?.isVeg === 1;
          });

          if (filteredItems.length === 0) return null;

          return (
            <div key={catIdx} className="menu-category-section">
              <div className="category-header">
                <h3>
                  {category.title} ({filteredItems.length})
                </h3>
              </div>

              <div className="category-items-list">
                {filteredItems.map((dish) => {
                  const item = dish?.card?.info;
                  if (!item) return null;

                  const priceInRupees = item.price
                    ? item.price / 100
                    : item.defaultPrice
                    ? item.defaultPrice / 100
                    : 249;

                  const cartItem = cartItems.find((ci) => ci.id === item.id);
                  const qty = cartItem ? cartItem.quantity : 0;
                  const itemImg = getImageSrc(item.imageId);

                  return (
                    <div key={item.id} className="dish-card">
                      <div className="dish-details">
                        <div className="dish-veg-badge">
                          <span
                            className={
                              item.isVeg === 1 ? "veg-icon" : "non-veg-icon"
                            }
                          >
                            ●
                          </span>
                          {item.rating && (
                            <span className="dish-star-rating">
                              ★ {item.rating} ({item.ratingCount || "100+"})
                            </span>
                          )}
                        </div>

                        <h4 className="dish-name">{item.name}</h4>
                        <div className="dish-price">₹{priceInRupees}</div>
                        <p className="dish-desc">{item.description}</p>
                      </div>

                      <div className="dish-action-col">
                        <div className="dish-img-wrap">
                          <img
                            src={itemImg}
                            alt={item.name}
                            className="dish-thumbnail"
                            onError={(e) => {
                              e.target.src =
                                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80";
                            }}
                          />
                          <div className="dish-add-container">
                            {qty === 0 ? (
                              <button
                                className="add-btn-main"
                                onClick={() => addToCart(item, resInfo)}
                              >
                                ADD <span>+</span>
                              </button>
                            ) : (
                              <div className="qty-selector">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="qty-btn"
                                >
                                  -
                                </button>
                                <span className="qty-count">{qty}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="qty-btn"
                                >
                                  +
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Cart Bar if items exist */}
      {cartCount > 0 && (
        <div className="floating-cart-bar">
          <div className="floating-cart-info">
            <span className="floating-cart-count">
              {cartCount} {cartCount === 1 ? "Item" : "Items"} added
            </span>
            <span className="floating-cart-total">₹{cartTotal.toFixed(2)}</span>
          </div>
          <Link to="/cart" className="floating-cart-btn">
            View Cart & Checkout →
          </Link>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;

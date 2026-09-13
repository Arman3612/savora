import React, { useState } from "react";
import { useCart } from "../utils/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, clearCart, cartCount, cartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const deliveryFee = cartTotal > 199 ? 0 : 35;
  const platformFee = 6;
  const gstCharges = Math.round(cartTotal * 0.05);
  const finalTotal = Math.max(0, cartTotal + deliveryFee + platformFee + gstCharges - discountAmount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "SAVORA50" || code === "WELCOME" || code === "ROYALDELIGHT") {
      const disc = Math.min(100, Math.round(cartTotal * 0.5));
      setDiscountAmount(disc);
      setCouponApplied(true);
    } else {
      alert("Invalid Privilege Code. Try 'SAVORA50' for 50% Royal Welcome privilege!");
    }
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="order-success-card savora-success-card">
        <div className="success-icon">⚜️</div>
        <h2>Royal Order Confirmed!</h2>
        <p className="order-id">Order Reference: #SAV-{Math.floor(100000 + Math.random() * 900000)}</p>
        <p className="order-estimate">
          Your gourmet dishes are currently being prepared with artisan precision. Dispatched in thermal temperature-locked packaging within <b>20-25 minutes</b> to your address in Chandigarh.
        </p>
        <div className="order-actions">
          <Link to="/" className="continue-btn savora-gold-btn" onClick={() => setOrderPlaced(false)}>
            Explore More SAVORA Delicacies →
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-container savora-empty-cart">
        <div className="empty-cart-icon">⚜️</div>
        <h2>Your SAVORA Dining Cart is Empty</h2>
        <p>Your palate deserves excellence. Discover handcrafted gourmet creations from our master chef brigades.</p>
        <Link to="/" className="explore-btn savora-gold-btn">
          EXPLORE SAVORA MENU & DISHES
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page savora-cart-page">
      <div className="cart-container savora-cart-container">
        {/* Left Section: Delivery & Items */}
        <div className="cart-left-col">
          {/* Address Box */}
          <div className="cart-card address-card savora-cart-card">
            <div className="card-header">
              <span className="card-icon">📍</span>
              <div>
                <h3>VIP Delivery Address</h3>
                <p>Flat 402, Green Avenue, Sector 17, Chandigarh</p>
                <small className="time-badge savora-badge-gold">⚡ 25 MIN EXPRESS THERMAL DELIVERY</small>
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="cart-card items-card savora-cart-card">
            <div className="card-header items-header">
              <h3>Curated Selection ({cartCount} dishes)</h3>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear All
              </button>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row savora-item-row">
                  <div className="item-veg-name">
                    <span className={item.isVeg ? "veg-dot" : "non-veg-dot"}>●</span>
                    <span className="item-title">{item.name}</span>
                  </div>

                  <div className="item-qty-box savora-qty-box">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-price savora-item-price">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Special Instructions */}
            <div className="cooking-notes">
              <input
                type="text"
                placeholder="✍️ Add tasting note or dietary instruction for the Master Chef..."
                className="notes-input"
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="cart-card payment-card savora-cart-card">
            <h3>Select Payment Preference</h3>
            <div className="payment-options">
              <label className={`payment-option ${paymentMethod === "upi" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
                <span>📱 Instant UPI / GPay / PhonePe</span>
              </label>

              <label className={`payment-option ${paymentMethod === "card" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <span>💳 Premium Credit / Debit Card</span>
              </label>

              <label className={`payment-option ${paymentMethod === "cod" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <span>💵 Pay Upon White-Glove Handover</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Section: Bill Details & Coupons */}
        <div className="cart-right-col">
          {/* Coupon Box */}
          <div className="cart-card coupon-card savora-cart-card">
            <h4>Apply Royal Privilege Code</h4>
            <form onSubmit={handleApplyCoupon} className="coupon-form">
              <input
                type="text"
                placeholder="Try SAVORA50"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
              <button type="submit" className="apply-coupon-btn savora-gold-btn">
                {couponApplied ? "Applied ✓" : "Apply"}
              </button>
            </form>
            {couponApplied ? (
              <p className="coupon-success">
                ⚜️ Privilege 'SAVORA50' applied! You saved ₹{discountAmount}
              </p>
            ) : (
              <small className="coupon-hint">Use code <strong>SAVORA50</strong> for 50% discount</small>
            )}
          </div>

          {/* Bill Summary */}
          <div className="cart-card bill-card savora-cart-card">
            <h3 className="bill-title">Dining Bill Summary</h3>
            <div className="bill-row">
              <span>Dishes Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>

            <div className="bill-row">
              <span>White-Glove Delivery</span>
              <span>
                {deliveryFee === 0 ? (
                  <span className="free-tag savora-free-tag">COMPLIMENTARY</span>
                ) : (
                  `₹${deliveryFee}`
                )}
              </span>
            </div>

            <div className="bill-row">
              <span>Thermal Insulation Service</span>
              <span>₹{platformFee}</span>
            </div>

            <div className="bill-row">
              <span>GST & Dining Cess</span>
              <span>₹{gstCharges}</span>
            </div>

            {couponApplied && (
              <div className="bill-row discount-row savora-discount-row">
                <span>Royal Privilege (SAVORA50)</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}

            <div className="bill-divider"></div>

            <div className="bill-row total-row savora-total-row">
              <strong>TOTAL DUE</strong>
              <strong>₹{finalTotal.toFixed(2)}</strong>
            </div>

            <button className="pay-now-btn savora-gold-btn pay-btn-large" onClick={handlePlaceOrder}>
              Confirm & Pay ₹{finalTotal.toFixed(2)} →
            </button>

            <div className="cancellation-policy savora-policy">
              🛡️ <b>SAVORA Assurance:</b> 100% guarantee of thermal freshness and gourmet taste integrity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

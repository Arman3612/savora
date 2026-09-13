import React, { useState } from "react";
import { BRAND_NAME } from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "Gourmet Dining Order",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "How does SAVORA guarantee piping hot delivery under 25 minutes?",
      a: "Every SAVORA order is packed in custom triple-layer thermal insulation containers with active temperature seals. Our dedicated single-drop express couriers transit directly from the chef's pass straight to your doorstep without multi-order pooling."
    },
    {
      q: "What is the SAVORA 6-Stage Culinary Journey shown in the Hero showcase?",
      a: "Our signature sequence highlights: 1) Master Chef Plating, 2) Thermal Seal & Temperature Lock, 3) Priority Handover, 4) Express City Transit, 5) White-glove Doorstep Arrival, and 6) The Grand Royal Dining Feast."
    },
    {
      q: "What VIP privilege code can I apply to my order?",
      a: "New guests can apply promo code 'SAVORA50' on the Cart page for a 50% royal welcome privilege (up to ₹100), or 'GOLDENFEAST' on orders above ₹499."
    },
    {
      q: "Can I book private catering or chef-curated tastings?",
      a: "Yes! Simply submit the concierge inquiry form on this page with topic 'Private Chef & Catering' or contact our direct concierge desk."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", issueType: "Gourmet Dining Order", message: "" });
    }, 4000);
  };

  return (
    <div className="contact-page savora-contact-page">
      <div className="contact-header savora-contact-header">
        <span className="contact-badge savora-badge-gold">VIP GUEST SERVICES</span>
        <h1>The SAVORA Concierge Desk ⚜️</h1>
        <p>Direct assistance for private tasting inquiries, dietary customizations, and white-glove order dispatch.</p>
      </div>

      <div className="contact-layout savora-contact-layout">
        {/* Contact Form */}
        <div className="contact-card form-card savora-form-card">
          <div className="card-title-gold">
            <span>⚜️</span>
            <h3>Connect With Our Concierge</h3>
          </div>
          {submitted ? (
            <div className="contact-success-toast savora-success-toast">
              ⚜️ Thank you <b>{formData.name || "Esteemed Guest"}</b>. Your inquiry has been prioritized. Our Chief Concierge will attend to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord / Lady Arman Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. arman@savora-dining.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Inquiry Nature</label>
                <select
                  value={formData.issueType}
                  onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                >
                  <option value="Gourmet Dining Order">Active Gourmet Order & Live Tracking</option>
                  <option value="Private Chef & Catering">Private Chef & Event Catering</option>
                  <option value="Chef Partnership">Artisan Chef & Kitchen Collaboration</option>
                  <option value="Feedback & Accolades">Culinary Feedback & Accolades</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Inquiry or Custom Request</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Kindly elaborate on your culinary preferences or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn savora-gold-btn">
                Send to Concierge Desk →
              </button>
            </form>
          )}
        </div>

        {/* FAQs */}
        <div className="contact-card faq-card savora-faq-card">
          <div className="card-title-gold">
            <span>⚜️</span>
            <h3>Frequently Addressed Inquiries</h3>
          </div>
          <div className="faqs-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item savora-faq-item ${activeFaq === idx ? "expanded" : ""}`}
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{activeFaq === idx ? "▲" : "▼"}</span>
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

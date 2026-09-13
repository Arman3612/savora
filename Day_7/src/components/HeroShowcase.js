import React, { useState, useEffect, useRef } from "react";
import {
  Logo_URL,
  PROMO_VIDEO_URL,
  SAVORA_PHOTOS,
  BRAND_NAME,
  BRAND_TAGLINE
} from "../utils/constants";

const HeroShowcase = ({ onExploreMenu, onExploreMap }) => {
  // State: Video plays once on mount/refresh, then transitions to photo sequence
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const videoRef = useRef(null);

  // When video completes, switch to photos
  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setCurrentPhotoIndex(0);
  };

  // 1-second slideshow interval when video ends
  useEffect(() => {
    if (isVideoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % SAVORA_PHOTOS.length);
    }, 1000); // exactly 1 second swap

    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  // Attempt video play on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setHasStartedPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay blocked or waiting for interaction:", err);
      });
    }
  }, []);

  const handleReplayVideo = () => {
    setCurrentPhotoIndex(0);
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleSkipToPhotos = () => {
    setIsVideoPlaying(false);
    setCurrentPhotoIndex(0);
  };

  const currentPhoto = SAVORA_PHOTOS[currentPhotoIndex] || SAVORA_PHOTOS[0];

  return (
    <section className="savora-hero-showcase">
      {/* Background ambient lighting effects */}
      <div className="hero-glow-orb hero-glow-1"></div>
      <div className="hero-glow-orb hero-glow-2"></div>

      <div className="hero-content-grid">
        {/* Left Column: Brand Story & Call to Action */}
        <div className="hero-brand-col">
          <div className="hero-badge-pill">
            <span className="badge-sparkle">✨</span>
            <span>HAUTE CUISINE & EXPRESS DELIVERY</span>
          </div>

          <div className="hero-logo-banner">
            <img
              src={Logo_URL}
              alt="SAVORA Royal Emblem"
              className="hero-brand-logo-img"
            />
          </div>

          <h1 className="hero-title">
            Artisanal Flavors, Delivered with <span className="gold-text-glow">Royal Precision</span>
          </h1>

          <p className="hero-tagline-motto">
            <span className="gold-dash">—</span> {BRAND_TAGLINE} <span className="gold-dash">—</span>
          </p>

          <p className="hero-description">
            Experience Michelin-inspired culinary artistry crafted by master chefs. Sealed in
            signature thermal temperature-lock packaging and expedited to your dining table
            within 25 minutes.
          </p>

          {/* Key Value Propositions */}
          <div className="hero-perks-row">
            <div className="hero-perk">
              <span className="perk-icon">⭐</span>
              <div className="perk-text">
                <strong>4.9 Rating</strong>
                <span>Epicurean Quality</span>
              </div>
            </div>
            <div className="hero-perk">
              <span className="perk-icon">⚡</span>
              <div className="perk-text">
                <strong>25 Minutes</strong>
                <span>Guaranteed Express</span>
              </div>
            </div>
            <div className="hero-perk">
              <span className="perk-icon">♨️</span>
              <div className="perk-text">
                <strong>Thermal Lock</strong>
                <span>Piping Hot Delivery</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#signature-dishes" className="btn-savora-gold" onClick={onExploreMenu}>
              Explore Royal Menu <span className="btn-arrow">→</span>
            </a>
            <button className="btn-savora-outline" onClick={onExploreMap}>
              🗺️ Live Kitchen Map
            </button>
          </div>
        </div>

        {/* Right Column: The Cinematic Video & 1-Second Photo Theater */}
        <div className="hero-theater-col">
          <div className="theater-frame">
            {/* Golden ornate corner highlights */}
            <div className="frame-corner top-left"></div>
            <div className="frame-corner top-right"></div>
            <div className="frame-corner bottom-left"></div>
            <div className="frame-corner bottom-right"></div>

            {/* Live Mode Header Overlay */}
            <div className="theater-header-bar">
              <div className="theater-status">
                <span className="status-live-dot"></span>
                <span className="theater-mode-text">
                  {isVideoPlaying ? "CINEMATIC PROMO • PLAYING ONCE" : "THE SAVORA JOURNEY • 1S SEQUENCE"}
                </span>
              </div>

              <div className="theater-controls-mini">
                {isVideoPlaying ? (
                  <>
                    <button
                      className="theater-btn-mini"
                      onClick={() => setIsMuted(!isMuted)}
                      title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    >
                      {isMuted ? "🔇 Unmute" : "🔊 Muted"}
                    </button>
                    <button
                      className="theater-btn-mini skip-btn"
                      onClick={handleSkipToPhotos}
                      title="Skip Video to Photo Sequence"
                    >
                      Photos ⏭
                    </button>
                  </>
                ) : (
                  <button
                    className="theater-btn-mini replay-btn"
                    onClick={handleReplayVideo}
                    title="Watch Video Once More"
                  >
                    ↺ Replay Video
                  </button>
                )}
              </div>
            </div>

            {/* Viewport Display: Either the Video (plays once) OR the 1-second Photos Carousel */}
            <div className="theater-viewport">
              {isVideoPlaying ? (
                <div className="video-display-wrapper">
                  <video
                    ref={videoRef}
                    src={PROMO_VIDEO_URL}
                    autoPlay
                    muted={isMuted}
                    playsInline
                    onEnded={handleVideoEnded}
                    className="hero-video-media"
                  />
                  <div className="video-ambient-overlay">
                    <div className="video-overlay-text">
                      <span className="gold-badge-small">SAVORA EXCLUSIVE</span>
                      <h3>Pure Luxury In Every Bite</h3>
                      <p>From Our Gourmet Kitchen Directly To Your Doorstep</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="photo-display-wrapper">
                  <img
                    key={currentPhoto.id}
                    src={currentPhoto.src}
                    alt={`SAVORA Step ${currentPhoto.id}: ${currentPhoto.title}`}
                    className="hero-photo-media fade-in-zoom"
                  />
                  <div className="photo-gradient-overlay">
                    <div className="photo-step-info">
                      <span className="step-counter-badge">
                        STEP {currentPhotoIndex + 1} OF {SAVORA_PHOTOS.length} (1s Swap)
                      </span>
                      <h3 className="step-title">{currentPhoto.title}</h3>
                      <p className="step-desc">{currentPhoto.desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom 6-Step Story Indicator Strip */}
            <div className="theater-footer-strip">
              <div className="photo-steps-indicators">
                {SAVORA_PHOTOS.map((step, idx) => (
                  <div
                    key={step.id}
                    className={`step-indicator-item ${
                      !isVideoPlaying && currentPhotoIndex === idx ? "active" : ""
                    }`}
                    onClick={() => {
                      setIsVideoPlaying(false);
                      setCurrentPhotoIndex(idx);
                    }}
                    title={`Step ${idx + 1}: ${step.title}`}
                  >
                    <div className="step-bar"></div>
                    <span className="step-number">{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;

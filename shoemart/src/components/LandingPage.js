import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const banners = [
    process.env.PUBLIC_URL + "/img/Sneakers-Banners.jpeg",
    process.env.PUBLIC_URL + "/img/Formal shoes Banner.jpeg",
    process.env.PUBLIC_URL + "/img/sandalsbanners.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const [isXL, setIsXL] = useState(window.innerWidth >= 1200);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsXL(window.innerWidth >= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide only on XL devices
  useEffect(() => {
    if (isXL) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isXL, banners.length]);

  // Manual navigation (for smaller devices)
  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev + 1) % banners.length);

  return (
    <div className="landing-container">
      {/* Banner Slider */}
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <div className="banner-card" key={i}>
            <img src={banner} alt={`Banner ${i + 1}`} className="banner-img" />
          </div>
        ))}
      </div>

      {/* Manual navigation buttons for non-XL screens */}
      {!isXL && (
        <>
          <button className="nav-btn left" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="nav-btn right" onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}

      {/* Dots */}
      <div className="dots">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Text Content */}
      <div className="content">
        <h1 className="title animate-fade">Step Into Style</h1>
        <p className="subtitle animate-slide">
          Discover shoes that define comfort, elegance, and confidence.
        </p>
        <button className="explore-btn animate-bounce">Explore Now</button>
      </div>
    </div>
  );
};

export default LandingPage;

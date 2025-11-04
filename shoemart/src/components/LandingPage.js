import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const banners = [
    process.env.PUBLIC_URL + "/img/Sneakers-Banners.jpeg",
    process.env.PUBLIC_URL + "/img/Formal shoes Banner.jpeg",
    process.env.PUBLIC_URL + "/img/sandalsbanners.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide forward only (loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="landing-container">
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

      <div className="overlay"></div>

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

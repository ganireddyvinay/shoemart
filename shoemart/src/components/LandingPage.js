import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const banners = [
    process.env.PUBLIC_URL + "/img/Sneakers-Banners.jpeg",
    process.env.PUBLIC_URL + "/img/Formal shoes Banner.jpeg",
    process.env.PUBLIC_URL + "/img/sandalsbanners.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="landing-container">
      {/* Background banner slider */}
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <div
            key={i}
            className="banner-slide"
            style={{ backgroundImage: `url(${banner})` }}
          />
        ))}
      </div>

      {/* Gradient overlay for aesthetic look */}
      <div className="overlay"></div>

      {/* Foreground animated content */}
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

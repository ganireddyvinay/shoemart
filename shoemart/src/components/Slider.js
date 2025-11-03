import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const banners = [
    process.env.PUBLIC_URL + "/img/Sneakers-Banners.jpeg",
    process.env.PUBLIC_URL + "/img/Formal shoes Banner.jpeg",
    process.env.PUBLIC_URL + "/img/sandalsbanners.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [banners.length]);

  return (
    <div className="banner-container">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <img
            key={i}
            src={banner}
            alt={`Banner ${i + 1}`}
            className="banner-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

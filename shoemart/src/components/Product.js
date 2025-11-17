import React, { useState, useEffect, useContext } from "react";
import { products } from "../data";
import { Button, Alert } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import "./Product.css";
import { style } from "framer-motion/client";

function Product() {
  const [index, setIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const { addToCart } = useContext(CartContext);

  const selected = products[index];

  // Auto slide every 6s
  useEffect(() => {
    const timer = setInterval(() => handleNext(), 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const handleNext = () =>
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  const handleAddToCart = () => {
    addToCart({
      id: selected.id,
      name: selected.title,
      price: selected.price,
      image: selected.colors[0].img,
    });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Hide message after 2s
  };

  return (
    <section id="trending" className="trending-section text-center">
      <h2 className="trending-title">🔥 Trending Now</h2>

     {/* ✅ Success message */}
{showAlert && (
  <Alert
    variant="success"
    className="mx-auto w-50"
    style={{ backgroundColor: "#0026feff", color: "#fff" }}
  >
    ✅ Added to cart successfully!
  </Alert>
)}


      <div className="slider-container">
        {/* Left Button */}
        <button className="nav-btn left" onClick={handlePrev}>
          &#10094;
        </button>

        {/* Product Slide */}
        <div className="product-slide">
          <div className="product-img-container">
            <img
              src={selected.colors[0].img}
              alt={selected.title}
              className="product-img"
            />
          </div>

          <div className="product-info">
            <h3>{selected.title}</h3>
            <p>
              Experience comfort, durability, and performance with every step.
            </p>
            <h4 className="price-tag">${selected.price}</h4>
            <Button
              variant="dark"
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </Button>
          </div>
        </div>

        {/* Right Button */}
        <button className="nav-btn right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Dots indicator */}
      <div className="dots-container">
        {products.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Product;

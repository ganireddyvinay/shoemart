import React, { useState, useEffect } from "react";
import { products } from "../data";
import { Modal, Button, Form } from "react-bootstrap";
import "./Product.css";

function Product() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
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

  return (
    <section id="trending" className="trending-section text-center">
      <h2 className="trending-title">🔥 Trending Now</h2>

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
              className="buy-btn"
              onClick={() => setShow(true)}
            >
              Buy Now
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

      {/* Checkout Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Full name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Card Number</Form.Label>
              <Form.Control placeholder="xxxx-xxxx-xxxx-xxxx" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary">Pay ${selected.price}</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Product;

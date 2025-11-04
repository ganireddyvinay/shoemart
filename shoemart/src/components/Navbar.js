import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../context/CartContext"; // ✅ import cart context

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // ✅ access cart data

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Left Logo */}
        <Link to="/" className="brand">
          <span className="brand-text">ShoeMart</span>
        </Link>

        {/* Center Links */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <a href="#trending">Trending</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Side Buttons */}
        <div className="nav-actions">
          {/* ✅ Cart count display */}
          <Link to="/cart" className="cart-link">
            🛒 Cart {cartItems.length > 0 && (
              <span className="cart-count">({cartItems.length})</span>
            )}
          </Link>

          <Link to="/signup">
            <button className="btn signup">Sign up</button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

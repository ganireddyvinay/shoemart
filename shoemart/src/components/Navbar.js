import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
          <Link to="/cart" className="cart-link">Cart</Link>
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

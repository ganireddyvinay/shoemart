import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <div className="cart-item">
          <img src="/img/air.png" alt="Shoe" />
          <div className="cart-info">
            <h3>Nike Air</h3>
            <p>₹6,999</p>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className="cart-summary">
        <h3>Total: ₹6,999</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

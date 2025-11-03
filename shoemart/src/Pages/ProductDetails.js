import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={product.image} alt={product.title} />
        <div className="info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <button className="buy-btn">Buy Now</button>
          <Link to="/casual" className="back-btn">← Back to Casual Shoes</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ShoeProducts.css";
import FilterSidebar from "./FilterSidebar";

const allProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 2999,
    category: "casual",
    image: process.env.PUBLIC_URL + "/img/casual1.jpg",
  },
  {
    id: 2,
    name: "Adidas Runner",
    price: 3499,
    category: "sports",
    image: process.env.PUBLIC_URL + "/img/casual2.jpg",
  },
  {
    id: 3,
    name: "Puma Classic",
    price: 2799,
    category: "women",
    image: process.env.PUBLIC_URL + "/img/casual3.jpg",
  },
  {
    id: 4,
    name: "Formal Leather",
    price: 2599,
    category: "formal",
    image: process.env.PUBLIC_URL + "/img/Formal shoes Banner.jpeg",
  },
];

export default function ShoeProducts() {
  const { category } = useParams();
  const [liked, setLiked] = useState([]);
  const [cart, setCart] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all");

  // ✅ Filter by category & optional price
  const filteredProducts = allProducts.filter((p) => {
    const categoryMatch = p.category.toLowerCase() === category.toLowerCase();
    const priceMatch =
      priceFilter === "all" ||
      (priceFilter === "under3k" && p.price < 3000) ||
      (priceFilter === "above3k" && p.price >= 3000);
    return categoryMatch && priceMatch;
  });

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const addToCart = (id) => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  return (
    <div className="shoe-page">
      {/* ✅ Sidebar Filter */}
      <FilterSidebar setPriceFilter={setPriceFilter} />

      {/* ✅ Product Grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Rs. {product.price}</p>
              </div>

              <div className="product-actions">
                <button
                  className={`wishlist-btn ${
                    liked.includes(product.id) ? "active" : ""
                  }`}
                  onClick={() => toggleLike(product.id)}
                >
                  ❤️
                </button>
                <button
                  className="cart-btn"
                  onClick={() => addToCart(product.id)}
                >
                  🛒
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No products found for "{category}"
          </h2>
        )}
      </div>
    </div>
  );
}

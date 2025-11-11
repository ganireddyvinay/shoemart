import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryGallery.css";

const categories = [
  { id: 1, title: "casuals", img: process.env.PUBLIC_URL + "/img/Casual Shoes.avif" },
  { id: 2, title: "Sandals", img: process.env.PUBLIC_URL + "/img/Sandals.jpeg" },
  { id: 3, title: "Sports", img: process.env.PUBLIC_URL + "/img/Sports shoe.jpeg" },
  { id: 4, title: "Formal", img: process.env.PUBLIC_URL + "/img/Formal shoes.jpeg" },
];

export default function CategoryGallery() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/products/${category.toLowerCase()}`);
  };

  return (
    <section className="category-section">
      <h2 className="category-title">SHOP BY CATEGORY</h2>
      <div className="category-container">
        {categories.map((cat) => (
          <div
            className="category-card"
            key={cat.id}
            onClick={() => handleClick(cat.title)}
          >
            <div className="category-image-wrapper">
              <img src={cat.img} alt={cat.title} className="category-img" />
            </div>
            <h3 className="category-name">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

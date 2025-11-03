import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryGallery.css";

const categories = [
  { id: 1, title: "Men", img: process.env.PUBLIC_URL + "/img/casual1.jpg" },
  { id: 2, title: "Women", img: process.env.PUBLIC_URL + "/img/casual2.jpg" },
  { id: 3, title: "Sports", img: process.env.PUBLIC_URL + "/img/casual3.jpg" },
  { id: 4, title: "Formal", img: process.env.PUBLIC_URL + "/img/Formal shoes Banner.jpeg" },
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

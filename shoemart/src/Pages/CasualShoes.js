import React from "react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";
import "./CasualShoes.css";

const CasualShoes = () => {
  const casualShoes = products.filter((p) => p.category === "Casual");

  return (
    <section className="casual-page">
      <h2>Casual Shoes Collection</h2>
      <div className="shoe-grid">
        {casualShoes.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default CasualShoes;

import React from "react";
import "./FilterSidebar.css";

export default function FilterSidebar({ setPriceFilter }) {
  return (
    <div className="filter-sidebar">
      <h3>Filter by Price</h3>
      <div className="filter-buttons">
        <button onClick={() => setPriceFilter("all")}>All</button>
        <button onClick={() => setPriceFilter("under2k")}>Under ₹2000</button>
        <button onClick={() => setPriceFilter("above2k")}>Above ₹2000</button>
      </div>
    </div>
  );
}

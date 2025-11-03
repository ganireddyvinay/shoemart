import React from "react";
import "./FilterSidebar.css";

export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>

      <div className="filter-group">
        <h4>Gender</h4>
        <label><input type="checkbox" /> Men</label>
        <label><input type="checkbox" /> Women</label>
        <label><input type="checkbox" /> Kids</label>
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <label><input type="checkbox" /> Casual</label>
        <label><input type="checkbox" /> Sports</label>
        <label><input type="checkbox" /> Formal</label>
      </div>

      <div className="filter-group">
        <h4>Brand</h4>
        <label><input type="checkbox" /> Nike</label>
        <label><input type="checkbox" /> Adidas</label>
        <label><input type="checkbox" /> Puma</label>
      </div>

      <div className="filter-group">
        <h4>Price</h4>
        <input type="range" min="500" max="5000" />
      </div>
    </aside>
  );
}

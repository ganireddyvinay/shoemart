
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Features from "./components/Features";
import Product from "./components/Product";
import CategoryGallery from "./components/CategoryGallery";
import NewSeason from "./components/NewSeason";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import ProductDetails from "./Pages/ProductDetails";
import ShoeProducts from "./Pages/ShoeProducts"; // ✅ ADD THIS

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* ✅ Home Page */}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Product />
                <CategoryGallery />
                <NewSeason />
                <Features />
                <Footer />
              </>
            }
          />

          {/* ✅ Signup Page */}
          <Route path="/signup" element={<Signup />} />

          {/* ✅ Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/* ✅ Product Details */}
          <Route path="/casual-shoes/:id" element={<ProductDetails />} />

          {/* ✅ Category-based Shoe Page (Fixes the Empty Page Issue) */}
          <Route path="/products/:category" element={<ShoeProducts />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

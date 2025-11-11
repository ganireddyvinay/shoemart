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
import ShoeProducts from "./Pages/ShoeProducts";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/* ✅ Navbar always visible */}
          <Navbar />

          {/* ✅ App routes */}
          <Routes>
            {/* ---- Home Page ---- */}
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

            {/* ---- Shoe Products (Filtered View) ---- */}
            <Route path="/products/:category" element={<ShoeProducts />} />

            {/* ---- Product Details ---- */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* ---- Cart Page ---- */}
            <Route path="/cart" element={<Cart />} />

            {/* ---- Signup / Auth ---- */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

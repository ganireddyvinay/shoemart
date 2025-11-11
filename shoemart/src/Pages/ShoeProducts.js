import React, { useMemo, useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import ProductModal from "./ProductModal";
import "./ShoeProducts.css";
const demoShoes = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    brand: "Nike",
    price: 5499,
    category: "Running",
    discount: "40% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Nike Air Zoom Pegasus.jpeg",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    brand: "Adidas",
    price: 6299,
    category: "Running",
    discount: "35% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Adidas Ultraboos.jpeg",
  },
  {
    id: 3,
    name: "Puma RS-X",
    brand: "Puma",
    price: 4499,
    category: "Casual",
    discount: "45% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Puma RS-X.jpeg",
  },
  {
    id: 4,
    name: "Reebok Classic Leather",
    brand: "Reebok",
    price: 3899,
    category: "Casual",
    discount: "30% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Reebok Classic Leather.jpeg",
  },
  {
    id: 5,
    name: "Skechers GoRun",
    brand: "Skechers",
    price: 4999,
    category: "Walking",
    discount: "40% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Skechers GoRun.jpeg",
  },
  {
    id: 6,
    name: "New Balance 574",
    brand: "New Balance",
    price: 4699,
    category: "Casual",
    discount: "25% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/New Balance 574.jpeg",
  },
  {
    id: 7,
    name: "Asics Gel-Nimbus",
    brand: "Asics",
    price: 5799,
    category: "Running",
    discount: "42% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Asics Gel-Nimbus.jpeg",
  },
  {
    id: 8,
    name: "Converse All Star",
    brand: "Converse",
    price: 3499,
    category: "Casual",
    discount: "50% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Converse All Star.jpg",
  },
  {
    id: 9,
    name: "Vans Old Skool",
    brand: "Vans",
    price: 2999,
    category: "Skate",
    discount: "45% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Vans Old Skool.jpeg",
  },
  {
    id: 10,
    name: "Fila Disruptor II",
    brand: "Fila",
    price: 3799,
    category: "Lifestyle",
    discount: "38% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Fila Disruptor II.jpeg",
  },
  {
    id: 11,
    name: "Under Armour HOVR Sonic",
    brand: "Under Armour",
    price: 5899,
    category: "Sports",
    discount: "33% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Under Armour HOVR Sonic.jpeg",
  },
  {
    id: 12,
    name: "Bata Formal Oxford",
    brand: "Bata",
    price: 2799,
    category: "Formal",
    discount: "50% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Bata.jpeg",
  },
  {
    id: 13,
    name: "Woodland Trekking Boot",
    brand: "Woodland",
    price: 4999,
    category: "Outdoor",
    discount: "40% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Woodland Trek.jpeg",
  },
  {
    id: 14,
    name: "HRX Momentum",
    brand: "HRX",
    price: 2699,
    category: "Sports",
    discount: "35% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/HRX Momentum.jpeg",
  },
  {
    id: 15,
    name: "Red Tape Casual Loafers",
    brand: "Red Tape",
    price: 3199,
    category: "Casual",
    discount: "44% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Red Tape Casual Loafers.jpeg",
  },
  {
    id: 16,
    name: "Campus Active Runner",
    brand: "Campus",
    price: 1599,
    category: "Sports",
    discount: "50% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Campus Active Runner.jpg",
  },
  {
    id: 17,
    name: "Lancer Power Grip",
    brand: "Lancer",
    price: 1299,
    category: "Casual",
    discount: "47% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Lancer Power Grip.jpg",
  },
  {
    id: 18,
    name: "Asian Gravity Sports",
    brand: "Asian",
    price: 1499,
    category: "Running",
    discount: "50% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Asian Gravity Sports.jpeg",
  },
  {
    id: 19,
    name: "Liberty Formal Derby",
    brand: "Liberty",
    price: 2799,
    category: "Formal",
    discount: "40% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/Liberty Formal Derby.jpeg",
  },
  {
    id: 20,
    name: "SoleThreads Eco Flip",
    brand: "SoleThreads",
    price: 999,
    category: "Casual",
    discount: "55% OFF",
    image: process.env.PUBLIC_URL + "/img/productshoes/SoleThreads Eco Flip.jpg",
  },
];

export default function ShoeProducts() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  const [modalProduct, setModalProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const brands = useMemo(() => ["all", ...new Set(demoShoes.map((p) => p.brand))], []);
  const categories = useMemo(() => ["all", ...new Set(demoShoes.map((p) => p.category))], []);

  const filtered = demoShoes.filter((p) => {
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    if (brand !== "all" && p.brand !== brand) return false;
    if (category !== "all" && p.category !== category) return false;
    if (price === "under1000" && !(p.price < 1000)) return false;
    if (price === "1000to2000" && !(p.price >= 1000 && p.price < 2000)) return false;
    if (price === "above2000" && !(p.price >= 2000)) return false;
    return true;
  });

  function openDetails(product) {
    setModalProduct(product);
    setShowModal(true);
  }

  return (
    <Container fluid className="py-4">
      <Row>
        {/* Sidebar */}
        <Col xs={12} lg={2} className="mb-3">
          <div className="p-3 bg-light rounded sticky-filter shadow-sm">
            <h6>Search</h6>
            <InputGroup className="mb-2">
              <Form.Control
                placeholder="Search product..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </InputGroup>

            <h6 className="mt-3">Brand</h6>
            <Form.Select className="mb-2" value={brand} onChange={(e) => setBrand(e.target.value)}>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </Form.Select>

            <h6 className="mt-2">Category</h6>
            <Form.Select className="mb-2" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Form.Select>

            <h6 className="mt-2">Price</h6>
            <Form.Select value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value="all">All</option>
              <option value="under1000">Under ₹1000</option>
              <option value="1000to2000">₹1000 - ₹2000</option>
              <option value="above2000">Above ₹2000</option>
            </Form.Select>

            <Button
              className="mt-3 w-100"
              variant="secondary"
              onClick={() => {
                setBrand("all");
                setCategory("all");
                setPrice("all");
                setQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        </Col>

        {/* Products Grid */}
        <Col xs={12} lg={10}>
          <div className="products-grid">
            {filtered.map((p) => (
              <div className="product-card" key={p.id} onClick={() => openDetails(p)}>
                <div className="product-img-wrap">
                  <img src={p.image} alt={p.name} className="product-img" />
                  <span className="badge-discount">{p.discount}</span>
                </div>
                <div className="product-body">
                  <h6 className="product-title">{p.name}</h6>
                  <div className="product-meta">{p.brand}</div>
                  <div className="product-price">₹{p.price}</div>
                  <button className="btn btn-dark btn-sm w-100 mt-2">View Details</button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center w-100 py-5">No products match your filters.</div>
            )}
          </div>
        </Col>
      </Row>

      <ProductModal show={showModal} onHide={() => setShowModal(false)} product={modalProduct} />
    </Container>
  );
}

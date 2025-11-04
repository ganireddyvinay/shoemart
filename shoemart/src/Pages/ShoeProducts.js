
import React, { useContext, useMemo, useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


/* ---------- 20 demo shoes ---------- 
   Make sure images exist in public/img/ (or change paths)
*/
const demoShoes = [
  { id: 1, name: "Nike Air Zoom", brand: "Nike", price: 1319, size: "9", category: "Casual", image: "/img/casual1.jpg", discount: "60% OFF" },
  { id: 2, name: "Adidas Runner", brand: "Adidas", price: 1499, size: "8", category: "Sports", image: "/img/casual2.jpg", discount: "57% OFF" },
  { id: 3, name: "Puma Classic", brand: "Puma", price: 1899, size: "10", category: "Casual", image: "/img/casual3.jpg", discount: "50% OFF" },
  { id: 4, name: "Formal Leather", brand: "Bata", price: 2599, size: "9", category: "Formal", image: "/img/Formal shoes Banner.jpeg", discount: "45% OFF" },
  { id: 5, name: "Reebok Flex", brand: "Reebok", price: 1599, size: "7", category: "Sports", image: "/img/sneakers1.jpg", discount: "52% OFF" },
  { id: 6, name: "Woodland Trek", brand: "Woodland", price: 2399, size: "8", category: "Men", image: "/img/sneakers2.jpg", discount: "44% OFF" },
  { id: 7, name: "Sparx Casual", brand: "Sparx", price: 1099, size: "9", category: "Casual", image: "/img/sneakers3.jpg", discount: "58% OFF" },
  { id: 8, name: "Fila Active", brand: "Fila", price: 1799, size: "8", category: "Sports", image: "/img/sneakers4.jpg", discount: "49% OFF" },
  { id: 9, name: "Campus Mesh", brand: "Campus", price: 999, size: "10", category: "Casual", image: "/img/sneakers5.jpg", discount: "60% OFF" },
  { id: 10, name: "Bata Formal", brand: "Bata", price: 1899, size: "9", category: "Formal", image: "/img/sneakers6.jpg", discount: "47% OFF" },
  { id: 11, name: "HRX Sports", brand: "HRX", price: 1299, size: "8", category: "Sports", image: "/img/sneakers7.jpg", discount: "55% OFF" },
  { id: 12, name: "Asian Gravity", brand: "Asian", price: 1499, size: "7", category: "Sports", image: "/img/sneakers8.jpg", discount: "52% OFF" },
  { id: 13, name: "Lancer Zoom", brand: "Lancer", price: 999, size: "8", category: "Casual", image: "/img/sneakers9.jpg", discount: "60% OFF" },
  { id: 14, name: "Skechers GoWalk", brand: "Skechers", price: 2599, size: "9", category: "Casual", image: "/img/sneakers10.jpg", discount: "46% OFF" },
  { id: 15, name: "Liberty Comfort", brand: "Liberty", price: 1199, size: "8", category: "Casual", image: "/img/sneakers11.jpg", discount: "54% OFF" },
  { id: 16, name: "Red Tape Pro", brand: "Red Tape", price: 2299, size: "10", category: "Men", image: "/img/sneakers12.jpg", discount: "48% OFF" },
  { id: 17, name: "Relaxo Casual", brand: "Relaxo", price: 899, size: "9", category: "Casual", image: "/img/sneakers13.jpg", discount: "55% OFF" },
  { id: 18, name: "Lee Cooper Street", brand: "Lee Cooper", price: 1999, size: "8", category: "Casual", image: "/img/sneakers14.jpg", discount: "47% OFF" },
  { id: 19, name: "SoleThreads Eco", brand: "SoleThreads", price: 1299, size: "9", category: "Casual", image: "/img/sneakers15.jpg", discount: "53% OFF" },
  { id: 20, name: "Asian Nitro", brand: "Asian", price: 1499, size: "10", category: "Sports", image: "/img/sneakers16.jpg", discount: "50% OFF" },
];

export default function ShoeProducts() {
  const { addToCart } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

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

  return (
    <Container fluid className="py-4">
      <Row>
        {/* Sidebar */}
        <Col xs={12} lg={2} className="mb-3">
          <div className="p-3 bg-light rounded sticky-filter">
            <h6>Search</h6>
            <InputGroup className="mb-2">
              <Form.Control placeholder="Search product..." value={query} onChange={(e) => setQuery(e.target.value)} />
            </InputGroup>

            <h6 className="mt-3">Brand</h6>
            <Form.Select className="mb-2" value={brand} onChange={(e) => setBrand(e.target.value)}>
              {brands.map((b) => <option key={b} value={b}>{b}</option>)}
            </Form.Select>

            <h6 className="mt-2">Category</h6>
            <Form.Select className="mb-2" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </Form.Select>

            <h6 className="mt-2">Price</h6>
            <Form.Select value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value="all">All</option>
              <option value="under1000">Under ₹1000</option>
              <option value="1000to2000">₹1000 - ₹2000</option>
              <option value="above2000">Above ₹2000</option>
            </Form.Select>

            <Button className="mt-3 w-100" variant="secondary" onClick={() => { setBrand("all"); setCategory("all"); setPrice("all"); setQuery(""); }}>
              Reset Filters
            </Button>
          </div>
        </Col>

        {/* Products area */}
        <Col xs={12} lg={10}>
          <div className="products-grid">
            {filtered.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-img-wrap">
                  <img src={p.image} alt={p.name} className="product-img" onError={(e)=>{ e.target.src = "/img/placeholder.png"; }} />
                  <span className="badge-discount">{p.discount}</span>
                </div>
                <div className="product-body">
                  <h6 className="product-title">{p.name}</h6>
                  <div className="product-meta">
                    <small className="text-muted">{p.brand} • Size {p.size}</small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div>
                      <div className="product-price">₹{p.price}</div>
                    </div>

                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, image: p.image })}
                    >
                      🛒 Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && <div className="text-center w-100 py-5">No products match your filters.</div>}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

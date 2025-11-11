import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ProductModal({ show, onHide, product, onAdd }) {
  const [size, setSize] = useState(product?.size || "");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSize(product?.size || "");
    setQty(1);
  }, [product]);

  if (!product) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="sm">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title className="fs-5">{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: 200, objectFit: "cover" }}
          />
        </div>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>

        <Form.Group className="mb-2">
          <Form.Label>Size</Form.Label>
          <Form.Select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select size</option>
            {[6, 7, 8, 9, 10, 11, 12].map((s) => (
              <option key={s} value={String(s)}>
                {s}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
            {Array.from({ length: 10 }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            if (!size) {
              alert("Please select a size.");
              return;
            }
            onAdd(product, size, qty);
            onHide();
          }}
        >
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

import React, { useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart } = useContext(CartContext);

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <Container className="py-4">
      <h4>Your Cart</h4>
      {cart.length === 0 ? (
        <div className="p-4 bg-white rounded shadow-sm">Your cart is empty.</div>
      ) : (
        <Row className="gy-3">
          <Col md={8}>
            {cart.map((item) => (
              <div key={item.id} className="d-flex align-items-center gap-3 p-3 bg-white rounded shadow-sm">
                <img src={item.image} alt={item.name} style={{ width: 84, height: 84, objectFit: "cover", borderRadius: 8 }} />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{item.name}</div>
                  <div className="text-muted">₹{item.price}</div>
                </div>

                <div className="text-end">
                  <Form.Select aria-label="qty" value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value))} style={{ width: 90 }}>
                    {[1,2,3,4,5,6,7,8,9,10].map(q => <option key={q} value={q}>{q}</option>)}
                  </Form.Select>
                  <div className="mt-2">
                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-3 d-flex justify-content-between">
              <Button variant="danger" onClick={() => clearCart()}>Clear Cart</Button>
            </div>
          </Col>

          <Col md={4}>
            <div className="p-3 bg-white rounded shadow-sm">
              <h5>Price Details</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <div>Items ({cart.length})</div>
                <div>₹{total}</div>
              </div>
              <hr />
              <div className="d-grid mt-3">
                <Button variant="primary" disabled>Proceed to Checkout (Demo)</Button>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

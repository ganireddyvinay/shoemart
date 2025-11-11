import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "", email: "", address: "", city: "", pincode: "", card: "", expiry: "", cvv: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const isValid = () => {
    if (!form.name || !form.address || !form.city || !form.pincode) return false;
    if (!form.card || !form.expiry || !form.cvv) return false;
    if (cart.length === 0) return false;
    return true;
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!isValid()) { alert("Please fill all required fields and ensure cart is not empty."); return; }

    // simulate payment
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearCart();
      setSuccessModal(true);
    }, 1600);
  };

  return (
    <Container className="py-4">
      <h4>Checkout</h4>
      <Row>
        <Col md={7}>
          <Form onSubmit={handlePayment} className="bg-white rounded shadow-sm p-3">
            <h6>Shipping Details</h6>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={form.email} onChange={handleChange} type="email" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={form.address} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-2 d-flex gap-2">
              <Form.Control name="city" value={form.city} onChange={handleChange} placeholder="City" required />
              <Form.Control name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" required />
            </Form.Group>

            <hr />
            <h6>Payment (Demo)</h6>

            <Form.Group className="mb-2">
              <Form.Label>Card number</Form.Label>
              <Form.Control name="card" value={form.card} onChange={handleChange} placeholder="4242 4242 4242 4242" required />
            </Form.Group>

            <Form.Group className="mb-2 d-flex gap-2">
              <Form.Control name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" required />
              <Form.Control name="cvv" value={form.cvv} onChange={handleChange} placeholder="CVV" required />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <div><strong>Total:</strong> ₹{total}</div>
              <Button type="submit" variant="success" disabled={loading}>{loading ? "Processing..." : "Pay Now (Demo)"}</Button>
            </div>
          </Form>
        </Col>

        <Col md={5}>
          <div className="bg-white rounded shadow-sm p-3">
            <h6>Order Summary</h6>
            <hr />
            {cart.length === 0 ? <div>No items in cart</div> : (
              <>
                {cart.map(item => (
                  <div key={`${item.id}-${item.size}`} className="d-flex justify-content-between mb-2">
                    <div>
                      <div className="fw-semibold">{item.name}</div>
                      <small>Size: {item.size} × {item.qty}</small>
                    </div>
                    <div>₹{item.price * item.qty}</div>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                  <div><strong>Total</strong></div>
                  <div><strong>₹{total}</strong></div>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>

      <Modal show={successModal} onHide={() => setSuccessModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your payment was successful (demo). Thank you for your purchase. Your order will be processed shortly.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setSuccessModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

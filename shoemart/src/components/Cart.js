import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setShowCheckout(true);
    clearCart();
  };

  return (
    <Container className="py-4 cart-page">
      <h2 className="mb-4 text-center">🛍️ Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h5>Your cart is empty.</h5>
          <p>Add some products to get started!</p>
          <Button href="/" variant="primary">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <Row
              key={item.id}
              className="align-items-center cart-item border-bottom py-3"
            >
              <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                  onError={(e) => (e.target.src = "/img/placeholder.png")}
                />
              </Col>

              <Col xs={12} md={4}>
                <h6>{item.name}</h6>
                <p className="text-muted mb-1">{item.brand || "Brand"}</p>
                <p className="fw-bold text-dark">₹{item.price}</p>
              </Col>

              <Col xs={12} md={3}>
                <div className="d-flex align-items-center">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </Button>
                  <span className="mx-2 fw-bold">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </Col>

              <Col xs={12} md={2} className="text-md-end mt-2 mt-md-0">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}

          {/* Total Section */}
          <div className="cart-summary text-end mt-4">
            <h5>Total: ₹{total.toLocaleString()}</h5>
            <Button variant="success" size="lg" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}

      {/* ✅ Checkout Modal */}
      <Modal show={showCheckout} onHide={() => setShowCheckout(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Successful 🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Your payment was successful!</p>
          <p>Thank you for shopping with ShoeMart 👟</p>
          <Button variant="primary" onClick={() => setShowCheckout(false)}>
            Back to Home
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

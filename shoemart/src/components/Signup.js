import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // simple validation
    if (!name || !email) return alert("Please fill name and email.");
    // Mock signup
    signUp({ name, email });
    // redirect to cart after signup
    navigate("/cart");
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-3 shadow-sm">
            <h4 className="mb-3">Sign Up / Login</h4>
            <Form onSubmit={handleSignup}>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </Form.Group>
              <Button type="submit" className="w-100">Sign up</Button>
            </Form>
            <small className="text-muted d-block mt-3">This is a demo signup (no backend). After signup you will be redirected to Cart.</small>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

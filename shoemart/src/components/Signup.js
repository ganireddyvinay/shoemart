import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Signup.css";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  // Check if user already registered
  useEffect(() => {
    const registeredUser = localStorage.getItem("registeredUser");
    if (!registeredUser) {
      setShow(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name.trim() || !user.email.trim()) {
      alert("Please fill out all fields!");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(user));
    setShow(false);
  };

  return (
    <Modal show={show} backdrop="static" centered size="md" className="signup-popup">
      <Modal.Header className="border-0 text-center d-block">
        <h4 className="fw-bold">Welcome to ShoeMart 👟</h4>
        <p className="text-muted small">Please sign up to continue exploring our site</p>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>

          <Button type="submit" variant="dark" className="w-100">
            Sign Up
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-0 justify-content-center">
        <small className="text-muted">Your data will only be stored locally.</small>
      </Modal.Footer>
    </Modal>
  );
} 

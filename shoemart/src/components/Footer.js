import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-4 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>NIKE STORE</h5>
            <p className="small mb-0">© 2025 All Rights Reserved</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#" className="text-white mx-2"><Facebook /></a>
            <a href="#" className="text-white mx-2"><Instagram /></a>
            <a href="#" className="text-white mx-2"><Twitter /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

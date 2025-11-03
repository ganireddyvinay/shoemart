import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Truck, ShieldCheck, CreditCard, Award } from "lucide-react";

const Features = () => {
  const features = [
    { icon: <Truck size={40} />, title: "Free Shipping", text: "On all orders above $100" },
    { icon: <ShieldCheck size={40} />, title: "Secure Payment", text: "100% safe and protected" },
    { icon: <CreditCard size={40} />, title: "Easy Returns", text: "7-day return policy" },
    { icon: <Award size={40} />, title: "Premium Quality", text: "Best in-class materials" },
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Row className="text-center g-4">
          {features.map((f, index) => (
            <Col md={3} key={index}>
              <div className="p-3">
                <div className="mb-3">{f.icon}</div>
                <h5>{f.title}</h5>
                <p className="small text-light">{f.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;

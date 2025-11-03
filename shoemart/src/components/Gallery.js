import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Gallery = () => {
  const images = ["/img/air.png", "/img/jordan.png", "/img/blazer.png", "/img/crater.png", "/img/hippie.png"];

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Product Gallery</h2>
        <Row className="g-4">
          {images.map((img, index) => (
            <Col md={4} lg={3} sm={6} key={index}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Img variant="top" src={img} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;

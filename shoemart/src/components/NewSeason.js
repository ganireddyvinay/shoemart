import React from "react";
import { Container, Button } from "react-bootstrap";

const NewSeason = () => {
  return (
    <section
      id="newSeason"
      className="py-5 text-center text-white"
      style={{
        backgroundImage: "url('/img/newseason.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="py-5 bg-dark bg-opacity-50 rounded-4">
        <h1 className="fw-bold mb-3">New Season, New Arrivals</h1>
        <p className="lead mb-4">Discover our latest sneaker collection today.</p>
        <Button variant="light" size="lg">Explore Now</Button>
      </Container>
    </section>
  );
};

export default NewSeason;

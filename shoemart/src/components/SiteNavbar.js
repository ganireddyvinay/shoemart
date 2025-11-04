import React, { useContext } from "react";
import { Navbar, Container, Nav, Badge, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext, CartContext } from "../App";

export default function SiteNavbar() {
  const { user, signOut } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalCount = cart.reduce((s, p) => s + (p.qty || 1), 0);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">ShoeStore</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <span className="me-2">Hi, {user.name}</span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => {
                    signOut();
                    navigate("/");
                  }}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => navigate("/signup")}
              >
                Sign up / Login
              </Button>
            )}

            <Button
              variant="primary"
              className="position-relative"
              onClick={() => {
                // If not signed in redirect to signup, else go to cart
                if (!user) navigate("/signup");
                else navigate("/cart");
              }}
            >
              🛒 Cart
              {totalCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {totalCount}
                </Badge>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

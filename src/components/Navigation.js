import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navigation() {
    const cartCount = useSelector((state) => state.inventory.cartCount);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Link
            to="/"
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "15px",
              textDecoration: "none",
            }}
          >
            Homeboy
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavDropdown title="Jewelry" id="basic-nav-dropdown">
                <Link to="/store">All</Link>
                <Link to="#action/3.2">Rings</Link>
                <Link to="#action/3.3">
                  Necklaces
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Watches</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav style={{ marginLeft: "700px" }}>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Link
                to="/cart"
                style={{
                  color: "white",
                  fontSize: "17px",
                  margin: "7px",
                  textDecoration: "none",
                }}
              >
               <BsFillCartCheckFill/>({cartCount})
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;

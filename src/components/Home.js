import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Homeboy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/store">Jewelry</Nav.Link>
            <Nav.Link href="#features">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;

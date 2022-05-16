import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";

function Store() {
  return (
    <div>
      <Navigation />
      <Container>
      <h1>Store</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Item Title</Card.Title>
          <Card.Text>Piece details</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}

export default Store;

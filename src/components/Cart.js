import React from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkOut, removeFromCart } from "../features/inventory";

function Cart() {
  const cart = useSelector((state) => state.inventory.cart);
  const total = useSelector((state) => state.inventory.total);
  const dispatch = useDispatch();
  return (
    <div>
      <Navigation />
      <Container >
        <h1>Cart</h1>
        <Row>
          {cart.map((item) => {
            return (
              <Card key={item.id} style={{ width: "18rem", margin: "1rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Quantity:{item.quantity}</Card.Text>
                  <Card.Text>Price:${item.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(removeFromCart({ id: item.id }));
                    }}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <Card.Title>Total:${total}</Card.Title>
        <Button
          onClick={() => {
            dispatch(checkOut({ cart: { cart } }));
          }}
        >
          Checkout
        </Button>
      </Container>
    </div>
  );
}

export default Cart;

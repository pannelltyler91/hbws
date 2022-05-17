import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
import Row from 'react-bootstrap/Row'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/inventory";

function Store() {
  const inventory = useSelector((state) => state.inventory.inventory);
  const dispatch = useDispatch();
  return (
    <div>
      <Navigation />
      <Container>
        <h1>Store</h1>
        <Row>
        {inventory.map((item) => {
          return (
            <Card key={item.id} style={{ width: "18rem",margin:'1rem' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              <Card.Img variant="top" style={{width:'100px',height:'100px'}}src={item.image} />
                <Card.Text>Price:${item.pricePerItem}</Card.Text>
                <Button onClick={() => {dispatch(addToCart({name:item.title,id:item.id,quantity:item.quantity+1,price:item.pricePerItem,image:item.image}))} }>+</Button>
              </Card.Body>
            </Card>
          );
        })}
        </Row>
      </Container>
    </div>
  );
}

export default Store;

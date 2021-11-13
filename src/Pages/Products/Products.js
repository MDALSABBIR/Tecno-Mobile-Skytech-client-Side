import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Products.css'

const Products = (props) => {
  const { name, key, img, description, price } = props.product;
  return (
    <Col>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" className="product-img" src={img} />
        <Card.Body>
          <span className="fw-bold text-start h3">Prcie : {price}$</span>
          <Card.Title className="mt-2">{name.slice(0, 25)}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
          <div className=" d-flex justify-content-between align-items-center">
            <Link to={`/purchase/${key}`}>
              <Button className="btn-global-color " variant="primary">
                Purchase Now
              </Button>
            </Link>
            <Link to={`/review`}>
              <Button className="btn-global-color " variant="primary">
                Add A review
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;

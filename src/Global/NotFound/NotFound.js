import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            {" "}
            <img
              className="img-fluid"
              src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif"
              alt=""
            />
            <h2>Page Not Found</h2>
            <Link to="/home">
              <button className="btn btn-global-color mb-5 mt-3">
                Go Back Home
              </button>
            </Link>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;

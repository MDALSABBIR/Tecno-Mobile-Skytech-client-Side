import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pay = () => {
  return (
    <div className="">
      <div>
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <img
                className="img-fluid"
                src="http://edu.ieee.org/eg-aiet/wp-content/uploads/sites/241/giphy.gif"
                alt=""
              />
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
    </div>
  );
};

export default Pay;

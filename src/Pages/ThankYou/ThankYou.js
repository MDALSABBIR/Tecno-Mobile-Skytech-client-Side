import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            {" "}
            <img
              className="img-fluid"
              src="https://www.icegif.com/wp-content/uploads/thank-you-icegif-8.gif"
              alt=""
            />
            <Link to="/home">
              <button className="btn btn-global-color mb-5 me-3">
                Go Back Home
              </button>
            </Link>
            <Link to="/makeAdmin">
              <button className="btn btn-global-color mb-5">
                Make a Admin
              </button>
            </Link>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThankYou;

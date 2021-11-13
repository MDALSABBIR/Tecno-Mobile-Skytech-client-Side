import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <img
              className="img-fluid "
              src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80"
              alt=""
            />
          </Col>
          <Col
            className=" d-flex align-items-center justify-content-center "
            md={6}
          >
            <div className="text-start">
              <div>
                <p>AERIAL PHOTOGRAPHY</p>
                <h2>Capture Events From A New Perspective</h2>
                <p>
                  Whatever the length of the occasion, whether it be for an
                  hour, a day, a weekend or longer, we conduct thorough flight
                  plans and assessments to ensure your event is filmed in a way
                  that provides stunning HD aerial images, whilst being tailored
                  to your precise requirements and always with safety
                  regulations.
                </p>
                <Link to="/contactUs">
                  <button className="btn-global-color ">Contact Us</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

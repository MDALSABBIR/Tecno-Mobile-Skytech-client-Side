import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="my-5">
      <div>
        <Container>
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center"
              md={5}
            >
              {" "}
              <img
                className="img-fluid"
                src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"
                alt=""
              />
            </Col>
            <Col md={7}>
              <Form className="text-start form-contact mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="btn-global-color" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;

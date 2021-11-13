import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../contexts/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          alert("Admin Added Succeflly");
          history.push("/thankYou");
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col className="my-5" md={4}>
            <Form onSubmit={handleAdminSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h2>Make a Admin</h2>
                <Form.Control
                  type="email"
                  onBlur={handleOnBlur}
                  placeholder="Enter a email"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakeAdmin;

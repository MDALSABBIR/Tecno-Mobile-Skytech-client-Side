import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import "./Purchase.css";

const Purchase = () => {
  const { user } = useAuth();
  const { purchase } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactIteam = data.filter((oneData) => oneData.key == purchase);
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.productName = ExactIteam[0]?.name;
    data.productImg = ExactIteam[0]?.img;
    data.productPrice = ExactIteam[0]?.price;
    data.status = "Pending";
    console.log(data.email);
    console.log(data.productName);
    axios
      .post("http://localhost:5000/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Registration Succefull");
          history.push("/myOrder");
          reset();
        }
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div>
              <img
                className="img-fluid img-width"
                src={ExactIteam[0]?.img}
                alt=""
              />
              <div className="text-start">
                <h3>Products Name : {ExactIteam[0]?.name}</h3>

                <p>description : {ExactIteam[0]?.description}</p>
                <h2 className="text-start fw-bold">
                  Price : {ExactIteam[0]?.price}
                </h2>
                <p className="text-start">
                  Category : {ExactIteam[0]?.category}
                </p>
              </div>
            </div>

            <div className="add-reg-form">
              <p>
                If You Want to purchase Then Fil Up the Form and Click on Place
                Order Button :){" "}
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Input Name"
                  {...register("name", { required: true })}
                />
                <input
                  placeholder="Input Address"
                  {...register("address", { required: true })}
                />

                <input
                  placeholder="Input Phone Number"
                  type="number"
                  {...register("phone", { required: true })}
                />
                <input
                  className="btn btn-global-color "
                  value="Place Order"
                  type="submit"
                />
              </form>
              <Link to="/home">
                <button className="btn btn-warning mb-5 mt-3">
                  Go Back Home
                </button>
              </Link>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Purchase;

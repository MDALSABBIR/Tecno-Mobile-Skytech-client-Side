import React from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../contexts/useAuth";

const AddProduct = () => {
  const { user } = useAuth();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    console.log(data.email);
    axios
      .post("http://localhost:5000/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("New Product Added Succefully");
          history.push("/explore");
          reset();
        }
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}></Col>

          <Col md={8} className="mt-5 d-flex">
            <div className="add-reg-form">
              <h2 className="text-center mb-3 fw-bold global-left">
                Please Add A New Product
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Input Product Name"
                  {...register("name", { required: true })}
                />
                <input
                  placeholder="Input Product Image"
                  {...register("img", { required: true })}
                />
                <input
                  placeholder="Add category"
                  {...register("category", { required: true })}
                />
                <input
                  placeholder="Add Description"
                  {...register("description", { required: true })}
                />

                <input
                  type="number"
                  placeholder="Input Rating min: 1, max: 5"
                  {...register("rating", { min: 1, max: 5 })}
                />
                <input
                  type="number"
                  placeholder="Input Price"
                  {...register("price")}
                />
                <input
                  className="btn btn-global-color "
                  value="Add Review"
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
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;

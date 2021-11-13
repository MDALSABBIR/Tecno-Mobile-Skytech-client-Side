import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleReview from "../SingleReview/SingleReview";

const ShowReview = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div id="eventList">
          <h2 className="py-5 text-center fw-bold">
            Here is Our Recent Review
          </h2>
          <Row md={4} className="g-4 all-products">
            {products.map((product) => (
              <SingleReview product={product} key={product._id}></SingleReview>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Products from "./../Products/Products";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div>
          <h2 className="py-5 text-center fw-bold">Here is Our All Products</h2>
          <Row md={3} className="g-5 all-products">
            {products.map((product) => (
              <Products product={product} key={product._id}></Products>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Explore;

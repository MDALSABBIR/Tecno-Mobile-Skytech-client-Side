import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const ManageProducts = () => {
  const [orders, setOrders] = useState([]);

  //   This is For Delete

  const handleDeelete = (id) => {
    if (window.confirm("Are you sure you want To delete")) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("delete Succeflly");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    } else {
      return;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);
  return (
    <div className=" my-5">
      <h2 className="text-center pb-3">
        Here is Website All Products :{orders.length}
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>rating</th>
            <th>price</th>
            <th>Delete</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>{order.name}</td>
              <td>{order.category}</td>
              <td>{order.rating}</td>
              <td>{order.price}</td>
              <td>
                <div className="btn-all-table">
                  <button className="btn-global-color" onClick={() => handleDeelete(order._id)}>Cancel</button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProducts;

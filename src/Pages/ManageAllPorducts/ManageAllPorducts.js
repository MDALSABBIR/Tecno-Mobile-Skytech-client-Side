import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllPorducts = () => {
  const [orders, setOrders] = useState([]);
  const handleUpdate = (id) => {
    const updateStatus = { status: "Shipped" };
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Update Succeflly");
          fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((data) => {
              setOrders(data);
              console.log(data);
            });
        }
      });
  };

  //   This is For Delete

  const handleDeelete = (id) => {
    if (window.confirm("Are you sure you want To delete")) {
      const url = `http://localhost:5000/orders/${id}`;
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
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);

  return (
    <div className=" my-5">
      <h2 className="text-center pb-3">
        Here is Website All Orders :{orders.length}
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>product Name</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>{order.name}</td>
              <td>{order.productName}</td>
              <td>{order.phone}</td>
              <td>{order.status}</td>
              <td>
                <div className="btn-all-table">
                  <button
                    onClick={() => handleUpdate(order._id)}
                    className=" btn-global-color m-2"
                  >
                    Update
                  </button>

                  <button className=" btn-global-color m-2" onClick={() => handleDeelete(order._id)}>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllPorducts;

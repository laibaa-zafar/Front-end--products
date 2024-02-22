import Header from "./Header";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/list");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteOperation(id) {
    try {
      const response = await fetch(`http://localhost:8000/api/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Failed to delete item: ", error);
    }
  }

  return (
    <div>
      <Header />
      <h1>Product List</h1>
      <div className="col-sm-6 offset-sm-3">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    {item.file_path && (
                      <img
                        style={{ width: 100 }}
                        src={"http://localhost:8000/" + item.file_path}
                        alt=""
                        className="src"
                      />
                    )}
                  </td>
                  <td>
                    <span
                      onClick={() => deleteOperation(item.id)}
                      className="delete"
                    >
                      Delete
                    </span>
                  </td>
                  <td>
                    <Link to={"update/" + item.id}>
                      <span className="update">Update</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default ProductList;

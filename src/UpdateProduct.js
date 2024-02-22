import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { Button } from 'react-bootstrap'

function UpdateProduct(props) {
  const { id } = useParams();
  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8000/api/product/" + id);
      const jsonData = await result.json();
      setData(jsonData);
    };

    fetchData();
  }, [id]); // Include id as a dependency

  return (
    <div>
      <Header />
      <h1>Update Product {id}</h1>
      <input type="text" defaultValue={data.name} />
      <br /> <br></br>
      <input type="text" defaultValue={data.price} />
     <br/> <br />
      <input type="text" defaultValue={data.description} />
      <br /> <br />
      <input type="text" defaultValue={data.file_path} />
      <br /><br />
      <img style={{width:100}} src={"http://localhost:8000/" +data.file_path} alt="" />
<br />
      <br />
      <Button>Update Product</Button>
    </div>
  );
}

export default UpdateProduct;

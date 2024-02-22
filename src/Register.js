import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function Register() {
  const navigate = useNavigate(); // Define navigate before using it
  
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/add"); // Use navigate directly without push
    }
  }, [navigate]); // Add navigate to the dependency array

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    let item = { name, password, email };
    console.warn(item);
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <Header />
      <h1> Register </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="Enter name"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Enter email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="Enter password"
      />
      <br />
      <Button onClick={signUp}> Sign Up </Button>
    </div>
  );
}

export default Register;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", { email, password });
      alert("Registration Successfull");
      navigate("/login");
    } catch (err) {
      alert(`Registration Failed: ${err}`);
    }
  };

  return (
    <div>
      <h2>Register Here</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Enter your mail here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password here"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

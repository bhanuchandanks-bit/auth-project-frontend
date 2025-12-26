import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("http://localhost:5000/dashboard", {
          headers: { Authorization: token },
        })
        .then((res) => setMessage(res.data.message))
        .catch((err) => {
          alert("Session Expired");
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  });
  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

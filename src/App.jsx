import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

import Register from "./components/register";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav style={{ padding: "20px" }}>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

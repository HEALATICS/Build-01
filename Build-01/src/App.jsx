// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "/src/components/NavBar";
import HomePage from "/src/components/home/home.jsx";
import Register from "/src/components/register/register.jsx"; // Adjust path as needed
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

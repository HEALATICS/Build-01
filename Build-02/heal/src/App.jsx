// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "/src/components/NavBar"; // Adjust path as needed
import HomePage from "/src/components/home/home.jsx";
import Register from "/src/components/register/register.jsx";
import Login from "/src/components/login/login.jsx"; // Adjust path as needed
import DiseaseSelector from "/src/components/disease_select/disease.jsx";
import DiabetesPage from "/src/components/Diabetes/diabetes.jsx";
import BloodPressurePage from "/src/components/BP/bp.jsx"; // Ensure this path is correct
import CholesterolPage from "/src/components/cholesterol/Cholesterol.jsx"; // Ensure this path is correct
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
        <Route path="/login" element={<Login />} />
        <Route path="/disease-selector" element={<DiseaseSelector />} /> {/* Route for DiseaseSelector */}
        <Route path="/diabetes" element={<DiabetesPage />} /> {/* Route for DiabetesPage */}
        <Route path="/blood-pressure" element={<BloodPressurePage />} /> {/* Route for BloodPressurePage */}
        <Route path="/cholesterol" element={<CholesterolPage />} /> {/* Route for CholesterolPage */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

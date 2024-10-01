// src/components/DiseaseSelector.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./disease.css";

function DiseaseSelector() {
  const [selectedDisease, setSelectedDisease] = useState("");
  const navigate = useNavigate();

  const handleSelection = (disease) => {
    setSelectedDisease(disease);
    switch (disease) {
      case "Diabetes":
        navigate("/diabetes");
        break;
      case "Blood Pressure":
        navigate("/blood-pressure");
        break;
      case "Cholesterol":
        navigate("/cholesterol");
        break;
      default:
        console.error("Unknown disease type.");
    }
  };

  return (
    <div className="disease-selector-container">
      <h1>Select The Condition</h1>
      <div className="disease-options">
        <div className="disease-option-container">
          <h2>Diabetes</h2>
          <button
            className="disease-go-button"
            onClick={() => handleSelection("Diabetes")}
          >
            Go
          </button>
        </div>
        <div className="disease-option-container">
          <h2>Blood Pressure</h2>
          <button
            className="disease-go-button"
            onClick={() => handleSelection("Blood Pressure")}
          >
            Go
          </button>
        </div>
        <div className="disease-option-container">
          <h2>Cholesterol</h2>
          <button
            className="disease-go-button"
            onClick={() => handleSelection("Cholesterol")}
          >
            Go
          </button>
        </div>
      </div>
      {selectedDisease && (
        <div className="selected-disease-info">
          <h3>Selected Disease:</h3>
          <p>{selectedDisease}</p>
        </div>
      )}
    </div>
  );
}

export default DiseaseSelector;

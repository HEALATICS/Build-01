// src/components/DiabetesPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './diabetes.css'; // Make sure to create this CSS file

function DiabetesPage() {
  const [data, setData] = useState({
    sugarLevel: '',
    weight: '',
    age: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlePredict = () => {
    // Implement your prediction logic here
    alert("Prediction feature coming soon!");
  };

  return (
    <div className="diabetes-page">
      <h1 className="title">Diabetes</h1>
      <div className="container">
        {/* 2 Months Ago Column */}
        <div className="column">
          <h2>2 Months Ago</h2>
          <div className="row">
            <label>Sugar Level:</label>
            <input
              type="number"
              name="sugarLevel"
              value={data.sugarLevel}
              onChange={handleChange}
              placeholder="Enter Sugar Level"
            />
          </div>
          <div className="row">
            <label>Weight:</label>
            <input
              type="number"
              name="weight"
              value={data.weight}
              onChange={handleChange}
              placeholder="Enter Weight"
            />
          </div>
          <div className="row">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
              placeholder="Enter Age"
            />
          </div>
        </div>

        {/* Previous Month Column */}
        <div className="column">
          <h2>Previous Month</h2>
          <div className="row">
            <label>Sugar Level:</label>
            <input
              type="number"
              name="sugarLevel"
              value={data.sugarLevel}
              onChange={handleChange}
              placeholder="Enter Sugar Level"
            />
          </div>
          <div className="row">
            <label>Weight:</label>
            <input
              type="number"
              name="weight"
              value={data.weight}
              onChange={handleChange}
              placeholder="Enter Weight"
            />
          </div>
          <div className="row">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
              placeholder="Enter Age"
            />
          </div>
        </div>

        {/* Present Month Column */}
        <div className="column">
          <h2>Present Month</h2>
          <div className="row">
            <label>Sugar Level:</label>
            <input
              type="number"
              name="sugarLevel"
              value={data.sugarLevel}
              onChange={handleChange}
              placeholder="Enter Sugar Level"
            />
          </div>
          <div className="row">
            <label>Weight:</label>
            <input
              type="number"
              name="weight"
              value={data.weight}
              onChange={handleChange}
              placeholder="Enter Weight"
            />
          </div>
          <div className="row">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
              placeholder="Enter Age"
            />
          </div>
        </div>
      </div>
      {/* Predict Button */}
      <div className="predict-button-container">
        <button className="predict-button" onClick={handlePredict}>
          Predict
        </button>
      </div>
    </div>
  );
}

export default DiabetesPage;

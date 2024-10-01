// src/components/CholesterolPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './cholesterol.css'; // Ensure you create this CSS file

function CholesterolPage() {
  const [data, setData] = useState({
    cholesterolLevel: '',
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
    <div className="cholesterol-page">
      <h1 className="title">Cholesterol</h1>
      <div className="container">
        {/* 2 Months Ago Column */}
        <div className="column">
          <h2>2 Months Ago</h2>
          <div className="row">
            <label>Cholesterol Level:</label>
            <input
              type="number"
              name="cholesterolLevel"
              value={data.cholesterolLevel}
              onChange={handleChange}
              placeholder="Enter Cholesterol Level"
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
            <label>Cholesterol Level:</label>
            <input
              type="number"
              name="cholesterolLevel"
              value={data.cholesterolLevel}
              onChange={handleChange}
              placeholder="Enter Cholesterol Level"
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
            <label>Cholesterol Level:</label>
            <input
              type="number"
              name="cholesterolLevel"
              value={data.cholesterolLevel}
              onChange={handleChange}
              placeholder="Enter Cholesterol Level"
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

export default CholesterolPage;

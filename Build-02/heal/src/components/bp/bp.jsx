// src/components/BloodPressurePage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './bp.css'; // Make sure to create this CSS file

function BloodPressurePage() {
  const [data, setData] = useState({
    systolic: '',
    diastolic: '',
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
    <div className="blood-pressure-page">
      <h1 className="title">Blood Pressure</h1>
      <div className="container">
        {/* 2 Months Ago Column */}
        <div className="column">
          <h2>2 Months Ago</h2>
          <div className="row">
            <label>Systolic Pressure:</label>
            <input
              type="number"
              name="systolic"
              value={data.systolic}
              onChange={handleChange}
              placeholder="Enter Systolic Pressure"
            />
          </div>
          <div className="row">
            <label>Diastolic Pressure:</label>
            <input
              type="number"
              name="diastolic"
              value={data.diastolic}
              onChange={handleChange}
              placeholder="Enter Diastolic Pressure"
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
            <label>Systolic Pressure:</label>
            <input
              type="number"
              name="systolic"
              value={data.systolic}
              onChange={handleChange}
              placeholder="Enter Systolic Pressure"
            />
          </div>
          <div className="row">
            <label>Diastolic Pressure:</label>
            <input
              type="number"
              name="diastolic"
              value={data.diastolic}
              onChange={handleChange}
              placeholder="Enter Diastolic Pressure"
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
            <label>Systolic Pressure:</label>
            <input
              type="number"
              name="systolic"
              value={data.systolic}
              onChange={handleChange}
              placeholder="Enter Systolic Pressure"
            />
          </div>
          <div className="row">
            <label>Diastolic Pressure:</label>
            <input
              type="number"
              name="diastolic"
              value={data.diastolic}
              onChange={handleChange}
              placeholder="Enter Diastolic Pressure"
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

export default BloodPressurePage;

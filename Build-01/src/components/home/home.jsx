// src/components/HomePage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './home.css'; // Import your CSS module for styling
import logo from '/src/assets/logo.png'; // Adjust path to your logo image
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-container">
        {/* Left segment with logo and buttons */}
        <div className="home-logo-section">
          <img src={logo} alt="Healatics Logo" className="home-logo" />
          {/* Add some space between the logo and buttons */}
          <div className="home-button-container">
            <Link to="/register" className="home-button">Register</Link>
            <Link to="/login" className="home-button">Login</Link>
          </div>
        </div>

        {/* Right segment with details */}
        <div className="home-details-section">
          <h1>Welcome to Healatics</h1>
          <p>
            Healatics is a cutting-edge platform that provides advanced healthcare analytics to improve decision-making and optimize operations. Our mission is to empower healthcare providers with actionable insights through innovative data solutions.
          </p>
          <h2>Our Projects</h2>
          <ul>
            <li>Project 1: Healthcare Data Visualization</li>
            <li>Project 2: Predictive Analytics for Patient Care</li>
            <li>Project 3: Real-time Monitoring Systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

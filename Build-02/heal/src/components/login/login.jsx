// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./login.css"; // Custom styling

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example of an API call for authentication
    const response = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Sending email and password
    });

    const data = await response.json();

    if (response.ok) {
      // If login is successful, redirect or perform other actions
      console.log("Login successful:", data);
      alert("Login successful");
      // You might want to redirect to another page after login:
      // window.location.href = "/dashboard";
    } else {
      // If authentication fails, display error message
      setErrorMessage(data.detail || "Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

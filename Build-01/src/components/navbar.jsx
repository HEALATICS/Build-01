/* eslint-disable no-unused-vars */
// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png"; // Adjust the path to your logo image

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" style={{ height: '50px' }} /> {/* Adjust height as needed */}
                    <span style={{ color: 'white' }}>Healatics</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* Dropdown menu for Home and Register */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                Menu
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Home</Link></li>
                                <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                {/* Add more dropdown items here if needed */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

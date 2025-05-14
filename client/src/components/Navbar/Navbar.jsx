import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          YSHostel
        </Link>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/about">
                About Hostel
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/facilities">
                Facilities
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Buttons for Login and Sign Up */}
          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary ms-2">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

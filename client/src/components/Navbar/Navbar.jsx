import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          YSHostel
        </a>

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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-4">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/about">
                About Hostel
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/facilities">
                Facilities
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
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

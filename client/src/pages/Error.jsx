import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NotFound.css";

const Error = () => {
  return (
    <div className="notfound-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Error;

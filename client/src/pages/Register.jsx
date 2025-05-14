import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Signup.css";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Placeholder submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User submitted:", user);
    // Here, send user data to the backend
  };

  return (
    <div className="register-container my-4">
      <div className="register-box shadow-lg p-4 rounded">
        <h2 className="text-center mb-4">
          Sign Up to <span className="brand-name">YSHostel</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              className="form-control"
              placeholder="Enter your full name"
              value={user.username}
              onChange={handleInput}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleInput}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={user.phone}
              onChange={handleInput}
              required
              pattern="[0-9]{10}"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleInput}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

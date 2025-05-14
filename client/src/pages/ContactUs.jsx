import React, { useState } from "react";
import "../CSS/ContactUs.css";
import axios from "axios";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ username: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-section">
      <div className="overlay">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="contact-form p-4 rounded shadow">
                <h2 className="text-center mb-3 text-white">Contact Us</h2>
                <p className="text-center text-light mb-4">
                  We'd love to hear from you. Please fill out the form below.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-white">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                  >
                    Send Message
                  </button>

                  {status && (
                    <div className="alert mt-3 text-center alert-info">
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

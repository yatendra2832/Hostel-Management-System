import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../CSS/AboutPage.css"; // Custom styling
import Footer from "../components/Footer/Footer";
import MeetTheTeam from "../components/Cards/MeetTheTeam";
import VirtualTour from "../components/Cards/VirtualTour";

const About = () => {
  return (
    <>
      <section className="about-section container my-5 py-5">
        <div className="row align-items-center shadow-lg rounded-4 p-4 bg-light">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="image-container overflow-hidden rounded-4 shadow-sm">
              <img
                src="/hostel_image.jpg"
                alt="YSHostel Building"
                className="about-image img-fluid w-100"
                style={{
                  objectFit: "cover",
                  maxHeight: "600px",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          </div>
          <div className="col-md-6 ps-md-5">
            <h2 className="about-heading mb-3 fw-bold text-primary">
              Welcome to YSHostel
            </h2>
            <p className="about-lead fs-5 text-secondary mb-4">
              YSHostel was founded with a vision to redefine student living by
              providing a safe, modern, and tech-enabled environment where
              comfort meets community.
            </p>
            <h4 className="about-subheading text-dark mb-2">Our Mission</h4>
            <p className="about-text text-muted">
              Our mission is to empower students by offering them a supportive
              and secure living space enriched with smart facilities and a
              vibrant community — so they can focus on what truly matters:
              learning, growing, and thriving.
            </p>
          </div>
        </div>
      </section>

      <section className="our-story-section container py-5">
        <div className="row align-items-center flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <h2 className="section-heading mb-4">Our Story</h2>
            <p className="story-text">
              YSHostel was born out of a simple but powerful
              realization—students deserve more than just a place to sleep.
              During our own academic journeys, we encountered the common
              struggles of unsafe environments, poor facilities, and isolation.
              This inspired us to build a space where students could thrive
              personally, academically, and socially.
            </p>
            <p className="story-text">
              We envisioned YSHostel as more than just a hostel—it's a
              community. A home away from home where comfort, connection, and
              care are part of everyday life.
            </p>
            <h4 className="section-subheading mt-4">Founders’ Vision</h4>
            <p className="story-text">
              Our vision is to create a new standard in student accommodation—
              integrating modern technology, strong security, and a nurturing
              environment that promotes growth and well-being. YSHostel is
              committed to supporting every student’s journey by providing a
              safe, inclusive, and future-ready space.
            </p>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="image-container">
              <img
                src="/founders.png" // Replace with your own image
                alt="Founders discussing YSHostel plan"
                className="about-image img-fluid w-100"
                style={{
                  objectFit: "cover",
                  maxHeight: "600px",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <MeetTheTeam />
      <VirtualTour />
    </>
  );
};

export default About;

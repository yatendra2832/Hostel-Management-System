import React from "react";
import Tilt from "react-parallax-tilt"; // Tilt for interactive cards
import "../../CSS/WhyChooseYSHostel.css"; // Make sure to create and import the CSS file

const TrustFactors = [
  {
    icon: "💻",
    title: "Fully Digitized Hostel Experience",
    desc: "Experience seamless digital services, from room booking to maintenance requests.",
  },
  {
    icon: "⏰",
    title: "Real-time Updates & Alerts",
    desc: "Stay updated with instant alerts for room bookings, events, and important announcements.",
  },
  {
    icon: "🔍",
    title: "Transparent Management System",
    desc: "Enjoy complete transparency in hostel operations with easy access to room and payment details.",
  },
];

const WhyChooseYSHostel = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-5 fw-bold">Why Choose YSHostel?</h2>
      <div className="row text-center">
        {TrustFactors.map((factor, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              transitionSpeed={1000}
              className="h-100"
            >
              <div className="card trust-card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <div className="trust-icon mb-3">{factor.icon}</div>
                  <h5 className="card-title fw-semibold">{factor.title}</h5>
                  <p className="card-text text-muted">{factor.desc}</p>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseYSHostel;

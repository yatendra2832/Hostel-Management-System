import React from "react";
import Tilt from "react-parallax-tilt";
import "../../CSS/Features.css";

const features = [
  {
    icon: "🏠",
    title: "Easy Room Booking",
    desc: "Find and book rooms hassle-free with just a few clicks.",
  },
  {
    icon: "👮‍♂️",
    title: "Secure Access",
    desc: "Role-based login system to keep data and access secure.",
  },
  {
    icon: "🧾",
    title: "Complaint System",
    desc: "Raise and track complaints easily through your dashboard.",
  },
  {
    icon: "📱",
    title: "Mobile-Friendly",
    desc: "Access all features from your smartphone or tablet.",
  },
];

const FeatureCards = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-5 fw-bold">Key Features</h2>
      <div className="row text-center">
        {features.map((feature, index) => (
          <div className="col-md-3 col-sm-6 mb-4 " key={index}>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={1000}
              className="h-100"
            >
              <div className="card feature-card h-100 border-0 shadow-sm ">
                <div className="card-body">
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <h5 className="card-title fw-semibold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.desc}</p>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

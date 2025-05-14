import React from "react";
import "../CSS/Facilities.css";

const facilities = [
  {
    icon: "/amenities/bed.svg",
    title: "Fully Furnished Rooms",
    description:
      "Comfortable beds, study tables, cupboards, and clean interiors.",
  },
  {
    icon: "/amenities/wifi.svg",
    title: "High-Speed Wi-Fi",
    description: "24/7 fast internet for studies and entertainment.",
  },
  {
    icon: "/amenities/cctv.svg",
    title: "24x7 Security",
    description: "CCTV monitoring and secure entry system.",
  },
  {
    icon: "/amenities/dining.svg",
    title: "Mess & Cafeteria",
    description: "Hygienic and nutritious meals served daily.",
  },
  {
    icon: "/amenities/washingmachine.svg",
    title: "Laundry Services",
    description: "Weekly laundry service with ironing options.",
  },
  {
    icon: "/amenities/geyser.svg",
    title: "Housekeeping",
    description: "Daily cleaning of rooms and common areas.",
  },
  {
    icon: "/amenities/tv.svg",
    title: "Study Lounge",
    description:
      "Quiet, well-lit study space with seating and charging points.",
  },
  {
    icon: "/amenities/powerbackup.svg",
    title: "Power Backup",
    description: "Full backup to ensure uninterrupted services.",
  },
  {
    icon: "/amenities/parking.svg",
    title: "Parking Space",
    description: "Secure space for cycles and two-wheelers.",
  },
];

const Facilities = () => {
  return (
    <section className="container py-5 facilities-section my-4">
      <h2 className="text-center mb-4 text-dark fw-semibold display-5 section-title">
        Our Facilities
      </h2>
      <div className="row g-4">
        {facilities.map((facility, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="facility-card shadow-lg">
              <div className="card-body text-center">
                <img
                  src={facility.icon}
                  alt={facility.title}
                  className="facility-icon mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="card-title">{facility.title}</h5>
                <p className="card-text">{facility.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;

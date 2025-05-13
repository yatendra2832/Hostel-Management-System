import React from "react";
import "../CSS/Facilities.css"; // Custom styles for beauty

const facilities = [
  {
    icon: "🛌",
    title: "Fully Furnished Rooms",
    description:
      "Comfortable beds, study tables, cupboards, and clean interiors.",
  },
  {
    icon: "🌐",
    title: "High-Speed Wi-Fi",
    description: "24/7 fast internet for studies and entertainment.",
  },
  {
    icon: "🔐",
    title: "24x7 Security",
    description: "CCTV monitoring and secure entry system.",
  },
  {
    icon: "🍽️",
    title: "Mess & Cafeteria",
    description: "Hygienic and nutritious meals served daily.",
  },
  {
    icon: "🧺",
    title: "Laundry Services",
    description: "Weekly laundry service with ironing options.",
  },
  {
    icon: "🛁",
    title: "Clean Washrooms",
    description:
      "Regularly cleaned bathrooms with geysers and western fittings.",
  },
  {
    icon: "🧹",
    title: "Housekeeping",
    description: "Daily cleaning of rooms and common areas.",
  },
  {
    icon: "⚽",
    title: "Recreational Area",
    description: "Games, lounge, and TV room for relaxation.",
  },
  {
    icon: "📚",
    title: "Study Lounge",
    description:
      "Quiet, well-lit study space with seating and charging points.",
  },
  {
    icon: "🩺",
    title: "Medical Support",
    description: "First aid and nearby doctor on call.",
  },
  {
    icon: "🔋",
    title: "Power Backup",
    description: "Full backup to ensure uninterrupted services.",
  },
  {
    icon: "🅿️",
    title: "Parking Space",
    description: "Secure space for cycles and two-wheelers.",
  },
];

const Facilities = () => {
  return (
    <section className="container py-5 facilities-section my-4">
      <h1 className="text-center section-title">🏡 Our Facilities</h1>
      <p className="text-center section-subtitle mb-5">
        At <strong>YSHostel</strong>, we offer top-class facilities to ensure
        comfort, safety, and convenience for every student. Discover what makes
        your stay seamless and enjoyable.
      </p>
      <div className="row g-4">
        {facilities.map((facility, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="facility-card shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <div className="facility-icon">{facility.icon}</div>
                <h5 className="card-title fw-bold mt-3">{facility.title}</h5>
                <p className="card-text text-muted">{facility.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;

import React from "react";
import "../../CSS/InfoBanner.css"; // Make sure to create and import the CSS file

const InfoBanner = () => {
  return (
    <div className="container my-5">
      <div className="info-banner shadow-lg rounded-3">
        <h4 className="alert-heading text-primary">
          📣 Important Announcements
        </h4>
        <div className="announcement-content">
          <ul className="list-unstyled mb-0">
            <li>
              <strong>🎓 New Admissions Open:</strong> Register now for the
              upcoming semester!
            </li>
            <li>
              <strong>🏨 Available Rooms:</strong> Limited single and shared
              rooms left. Book yours today!
            </li>
            <li>
              <strong>📅 Upcoming Event:</strong> Orientation Program on{" "}
              <em>August 15th</em> in the main hall.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;

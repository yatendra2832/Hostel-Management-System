import React from "react";
import "../../CSS/AboutPage.css";

const teamMembers = [
  {
    name: "Yatendra Singh",
    role: "Founder & Project Lead",
    photo: "/yatendra.png", // Replace with actual image paths
    bio: "Visionary behind YSHostel, focused on creating a tech-driven and secure living space for students.",
  },
  // {
  //   name: "Ananya Sharma",
  //   role: "Hostel Manager",
  //   photo: "/ananya.png",
  //   bio: "Ensures smooth daily operations and takes care of student needs and grievances with utmost priority.",
  // },
  {
    name: "Mohit ",
    role: "Community Coordinator",
    photo: "/mohit.png",
    bio: "Organizes community-building events and ensures a vibrant social environment within the hostel.",
  },
  {
    name: "Prathvi Bharadwaj",
    role: "Admin & Finance",
    photo: "/prithvi.png",
    bio: "Manages all administrative tasks and ensures financial transparency and smooth record-keeping.",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center section-heading mb-5">Meet the Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 text-center shadow-sm team-card">
              <img
                src={member.photo}
                alt={member.name}
                className="card-img-top team-photo"
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;

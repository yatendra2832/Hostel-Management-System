import React from "react";
import "../../CSS/Testimonials.css"; // Import the CSS file for styling

const testimonials = [
  {
    name: "Ankita Sharma",
    review:
      "YSHostel has provided a home away from home. The facilities are top-notch, and the staff is super friendly. The 24/7 security and the Wi-Fi make it perfect for students.",
    photo: "https://randomuser.me/api/portraits/women/51.jpg", // Sample profile photo
  },
  {
    name: "Raj Patel",
    review:
      "I’ve had an amazing experience here. The rooms are clean, the food is great, and there’s always something to do. The management is super transparent and supportive.",
    photo: "https://randomuser.me/api/portraits/men/45.jpg", // Sample profile photo
  },
  {
    name: "Sanya Verma",
    review:
      "I love staying at YSHostel. It’s a very safe and comfortable place with all the amenities I need for a productive student life. Plus, the community is great!",
    photo: "https://randomuser.me/api/portraits/women/42.jpg", // Sample profile photo
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-5 fw-bold">What Our Students Say</h2>
      <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="card testimonial-card border-0 shadow-lg">
                <div className="card-body text-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="testimonial-photo rounded-circle mb-3"
                  />
                  <h5 className="card-title fw-semibold">{testimonial.name}</h5>
                  <p className="card-text">{testimonial.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

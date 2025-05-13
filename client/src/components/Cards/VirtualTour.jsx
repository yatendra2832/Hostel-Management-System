import React from "react";

const galleryImages = [
  { src: "/room.png", caption: "Spacious Rooms with Modern Furniture" },
  { src: "/commonarea.png", caption: "Relaxing Common Area for Socializing" },
  { src: "/mess.png", caption: "Clean & Hygienic Mess Facility" },
];

const VirtualTour = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 display-5 fw-semibold text-primary">
        Virtual Tour
      </h2>
      <div
        id="hostelCarousel"
        className="carousel slide carousel-fade shadow-lg rounded"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {galleryImages.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              data-bs-interval="4000"
            >
              <img
                src={image.src}
                className="d-block w-100 rounded"
                alt={`Hostel view ${index + 1}`}
                style={{
                  height: "500px",
                  objectFit: "cover",
                  filter: "brightness(90%)",
                }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-3 py-2">
                <h5 className="text-light">{image.caption}</h5>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hostelCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hostelCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </section>
  );
};

export default VirtualTour;

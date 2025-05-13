import FeatureCards from "../components/Cards/FeatureCards";
import InfoBanner from "../components/Cards/InfoBanner";
import Testimonials from "../components/Cards/Testimonials";
import WhyChooseYSHostel from "../components/Cards/WhyChooseYSHostel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../CSS/Home.css";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="overlay">
          <div className="home-content text-center">
            <h1>
              Welcome to <span className="brand">YSHostel</span>
            </h1>
            <h3 className="tagline">Where Comfort Meets Smart Living.</h3>
            <p className="description">
              A tech-enabled hostel experience built for today’s students.
            </p>
            <div className="buttons mt-4">
              <a href="/signup" className="btn btn-primary btn-lg me-3 shadow">
                Get Started
              </a>
              <a href="/about" className="btn btn-outline-light btn-lg shadow">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <FeatureCards />
      <InfoBanner />
      <WhyChooseYSHostel />
      <Testimonials />
    </>
  );
};

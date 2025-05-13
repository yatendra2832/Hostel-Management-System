import React from "react";
import "../../CSS/Footer.css"; // Make sure to create and import the CSS file

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Quick Links Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Contact Info</h5>
            <ul className="list-unstyled">
              <li>Knowledge Park II , Greater Noida</li>
              <li>+91 8750145379</li>
              <li> yshostel@gmail.com</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Follow Us</h5>
            <ul className="list-unstyled social-links">
              <li>
                <a href="https://facebook.com" className="footer-link">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="footer-link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="footer-link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="footer-link">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Terms Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row text-center mt-4">
          <div className="col-12">
            <p className="footer-bottom-text">
              © {new Date().getFullYear()} YSHostel. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">ECLIPSE.</h2>
            <p className="footer-desc">
              More than a café. A void where time stops and flavor begins.
            </p>
          </div>

          <div className="footer-info">
            <div>
              <h5 className="footer-heading">Coordinates</h5>
              <ul className="footer-list">
                <li className="footer-text">123 Void Avenue</li>
                <li className="footer-text">Galaxy District</li>
                <li className="footer-text">Sector 7</li>
              </ul>
            </div>
            <div>
              <h5 className="footer-heading">Temporal</h5>
              <ul className="footer-list">
                <li className="hours-item">
                  <span>Mon-Fri</span> <span>07:00 - 22:00</span>
                </li>
                <li className="hours-item">
                  <span>Sat-Sun</span> <span>08:00 - 23:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Eclipse Concept.</p>
          <div className="footer-social">
            <a href="#" className="social-link">
              Instagram
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

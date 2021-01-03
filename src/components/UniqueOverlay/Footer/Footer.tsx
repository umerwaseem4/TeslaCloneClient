import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>About Us</h2>
              <a href="/">How it works</a> <a href="/">Testimonials</a>
              <a href="/">Cushrefmer Caring</a>
              <a href="/">Terms of Service</a>
            </div>
            <div className="footer__a--items">
              <h2>Contact Us</h2>
              <a href="/">Contact</a> <a href="/">Support</a>
              <a href="/">Destinations</a>
            </div>
          </div>
          <div className="footer__a--wrapper">
            <div className="footer__a--items">
              <h2>Cars</h2>
              <a href="/">Become BF Driver</a> <a href="/">Requirments</a>
              <a href="/">Education</a> <a href="/">Behavior</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

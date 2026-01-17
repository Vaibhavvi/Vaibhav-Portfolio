import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row text-center text-md-start align-items-start g-4">

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="footer-title">Contact</h5>
            <p className="footer-text">📧 vd3111542@gmail.com</p>
            <p className="footer-text">📞 +91 6306751246</p>
          </div>

          {/* Branding */}
          <div className="col-md-4 text-center">
            <h4 className="footer-brand">Vaibhav.dev</h4>
            <p className="footer-text small">
              MERN Stack Developer • Backend Focused
            </p>
          </div>

          {/* Social Links */}
          <div className="col-md-4 text-md-end text-center bg-light p-3 rounded">
            <h5 className="footer-title">Follow Me</h5>
            <div className="footer-socials">
              <a
                href="https://github.com/Vaibhavvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-dubey-8199292b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/vaibhav_dubey_111/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom text-center">
          © {new Date().getFullYear()} Vaibhav Dubey ❤️  
          <span className="d-block d-md-inline">
            {" "}All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

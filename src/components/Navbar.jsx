import React from 'react';
import './Navbar.css';

function AnimatedNavbar() {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand animated-logo" onClick={() => handleScroll('home')} style={{ cursor: 'pointer' }}>
          VAIBHAV DUBEY
        </span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link animated-link" onClick={() => handleScroll('home')}>Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link animated-link" onClick={() => handleScroll('about')}>About</span>
            </li>
            <li className="nav-item">
              <span className="nav-link animated-link" onClick={() => handleScroll('projects')}>Projects</span>
            </li>
            <li className="nav-item">
              <span className="nav-link animated-link" onClick={() => handleScroll('skills')}>Skills</span>
            </li>
            <li className="nav-item">
              <span className="nav-link animated-link" onClick={() => handleScroll('contact')}>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AnimatedNavbar;

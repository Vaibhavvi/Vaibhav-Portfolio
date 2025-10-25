import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function AnimatedNavbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand animated-logo" to="/">VAIBHAV DUBEY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/skill">Skill</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AnimatedNavbar;

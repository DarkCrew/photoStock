import React from 'react';
import logo from '../assets/img/pexels-logo.svg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar-container">
          <div className="logo">
            <img className="logo-image" src={logo} alt="logo"></img>
            <span>Pexels</span>
          </div>
          <ul className="navbar-items">
            <li>
              <a
                className="navbar-item"
                href="https://www.pexels.com/discover/"
                target="_blank"
                rel="noreferrer">
                Explore
              </a>
            </li>
            <li>
              <a
                className="navbar-item"
                href="https://www.pexels.com/license/"
                target="_blank"
                rel="noreferrer">
                License
              </a>
            </li>
            <li>
              <a
                className="navbar-item"
                href="https://www.pexels.com/join-contributor/"
                target="_blank"
                rel="noreferrer">
                Upload
              </a>
            </li>
            <li>
              <a
                className="navbar-item btn-join"
                href="https://www.pexels.com/onboarding/"
                target="_blank"
                rel="noreferrer">
                Join
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

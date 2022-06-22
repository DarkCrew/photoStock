import React, { useState } from 'react';
import SearchForm from './SearchForm';

import logo from '../assets/img/pexels-logo.svg';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    window.scrollY > 80 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeNavbarBackground);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="container">
        <nav className="navbar-container">
          <div className="logo">
            <img className="logo-image" src={logo} alt="logo"></img>
            <span>Pexels</span>
          </div>
          <div className={navbar ? 'navbar-search-container active' : 'navbar-search-container'}>
            <SearchForm />
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

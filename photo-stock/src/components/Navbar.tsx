import React, { useState } from 'react';
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
            <input
              type="search"
              className="navbar-content-search"
              placeholder="Search for free photos and videos"
            />
            <button className="navbar-search-btn">
              <img
                className="navbar-search-btn-image"
                src="https://cdn-icons.flaticon.com/png/512/4024/premium/4024513.png?token=exp=1655210527~hmac=6df853562d1deebd4c30d6467ec306c6"
                alt="search-button"></img>
            </button>
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

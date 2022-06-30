import React, { useState } from 'react';
import SearchForm from './SearchForm';

import logo from '../assets/img/pexels-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import {
  changeOrientaion,
  setCurrentPage,
  setItems,
  setSearchItems,
} from '../redux/slices/imagesSlice';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeNavbarBackground = () => {
    window.scrollY > 80 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeNavbarBackground);

  const dispatch = useDispatch<AppDispatch>();
  function searchNewInfo() {
    dispatch(setSearchItems('landscape'));
    dispatch(setItems([]));
    dispatch(setCurrentPage());
    dispatch(changeOrientaion(''));
    navigate('/');
  }

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="container">
        <nav className="navbar-container">
          <div className="logo" onClick={() => searchNewInfo()}>
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

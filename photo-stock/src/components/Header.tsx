import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchImage } from '../redux/slices/imagesSlice';
import { AppDispatch, RootState } from '../redux/store';

function Header() {
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();

  function searchNewInfo() {
    if (inputValue !== '') {
      dispatch(fetchImage(inputValue));
    }
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-content-title">
            The best free stock photos &amp; videos shared by talented creators.
          </h1>
          <div className="header-search-container">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="search"
              className="header-content-search"
              placeholder="Search for free photos and videos"
            />
            <button className="header-search-btn">
              <img
                onClick={() => searchNewInfo()}
                className="header-search-btn-image"
                src="https://cdn-icons.flaticon.com/png/512/4024/premium/4024513.png?token=exp=1655210527~hmac=6df853562d1deebd4c30d6467ec306c6"
                alt="search-button"></img>
            </button>
          </div>
          <div className="header-content-trending">
            <span className="header-content-trending-title">Suggested:</span>
            <ul className="header-content-trending-items">
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/business/"
                  target="_blank"
                  rel="noreferrer">
                  business
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/space/"
                  target="_blank"
                  rel="noreferrer">
                  space
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/food/"
                  target="_blank"
                  rel="noreferrer">
                  food
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/summer/"
                  target="_blank"
                  rel="noreferrer">
                  summer
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/technology/"
                  target="_blank"
                  rel="noreferrer">
                  technology
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/forest/"
                  target="_blank"
                  rel="noreferrer">
                  forest
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/beach/"
                  target="_blank"
                  rel="noreferrer">
                  beach
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          className="header-photo-publisher"
          href="https://www.pexels.com/photo/landscape-sky-hands-woman-11325889/"
          target="_blank"
          rel="noreferrer">
          <span className="header-photo-publisher-title">Photo by&nbsp;</span>
          <span className="header-photo-publisher-name">Sebastiaan Stam</span>
        </a>
        <img
          className="header-background"
          src="https://images.pexels.com/photos/11325889/pexels-photo-11325889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1"
          alt="background-header"></img>
      </div>
    </div>
  );
}

export default Header;
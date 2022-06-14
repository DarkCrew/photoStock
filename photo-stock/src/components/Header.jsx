import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-content-title">
            The best free stock photos &amp; videos shared by talented creators.
          </h1>
          <div className="header-search-container">
            <input
              type="search"
              class="header-content-search"
              placeholder="Search for free photos and videos"
            />
            <button className="header-search-btn">
              <img
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
                  href="https://www.pexels.com/search/business/">
                  business
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/space/">
                  space
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/food/">
                  food
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/summer/">
                  summer
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/technology/">
                  technology
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/forest/">
                  forest
                </a>
                <span>,&nbsp;</span>
              </li>
              <li>
                <a
                  className="header-content-trending-item"
                  href="https://www.pexels.com/search/beach/">
                  beach
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          class="header-photo-publisher"
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

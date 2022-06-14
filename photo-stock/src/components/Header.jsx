import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1>The best free stock photos, royalty free images &amp; videos shared by creators.</h1>
          <div className="header-search-container">
            <input
              type="search"
              class="header-content-search"
              placeholder="Search for free photos"
            />
            <button className="header-search-btn">
              <img
                className="header-search-btn-image"
                src="https://cdn-icons.flaticon.com/png/512/4024/premium/4024513.png?token=exp=1655210527~hmac=6df853562d1deebd4c30d6467ec306c6"
                alt="search-button"></img>
            </button>
          </div>
        </div>
        <img
          className="header-background"
          src="https://images.pexels.com/photos/11325889/pexels-photo-11325889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1"
          alt="background-header"></img>
      </div>
    </div>
  );
}

export default Header;

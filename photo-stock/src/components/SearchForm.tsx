import React from 'react';

function SearchForm() {
  return (
    <div className="header-search-container">
      <input
        type="search"
        className="header-content-search"
        placeholder="Search for free photos and videos"
      />
      <button className="header-search-btn">
        <img
          className="header-search-btn-image"
          src="https://cdn-icons.flaticon.com/png/512/4024/premium/4024513.png?token=exp=1655210527~hmac=6df853562d1deebd4c30d6467ec306c6"
          alt="search-button"></img>
      </button>
    </div>
  );
}

export default SearchForm;

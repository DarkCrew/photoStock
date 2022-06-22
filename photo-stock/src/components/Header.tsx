import React from 'react';
import CategoryNames from './CategoryNames';
import SearchForm from './SearchForm';

function Header() {
  let arrCategoryIndex: number[] = [];

  while (arrCategoryIndex.length < 7) {
    const randomValue: number = Math.floor(Math.random() * 40);
    if (arrCategoryIndex.indexOf(randomValue) > -1) continue;
    arrCategoryIndex[arrCategoryIndex.length] = randomValue;
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-content-title">
            The best free stock photos &amp; videos shared by talented creators.
          </h1>
          <div className="header-search-container">
            <SearchForm />
          </div>
          <div className="header-content-trending">
            <span className="header-content-trending-title">Suggested:</span>
            <ul className="header-content-trending-items">
              {arrCategoryIndex.map((item: number, index: number) => (
                <CategoryNames key={item} curNumber={item} curIndex={index} />
              ))}
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

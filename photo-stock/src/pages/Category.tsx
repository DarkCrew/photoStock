import React from 'react';
import Main from '../components/Main';

import photoSize from '../assets/img/photosize.png';
import orientation from '../assets/img/orientation.png';

function Category() {
  return (
    <>
      <div className="category">
        <div className="category-background"></div>
        <div className="container">
          <div className="category-container">
            <ul className="category-filters">
              <li className="category-filters-item">
                <img className="category-photo" src={orientation} alt="orientation"></img>
                Orientation
              </li>
              <li className="category-filters-item">
                <img className="category-photo" src={photoSize} alt="orientation"></img>
                Size
              </li>
            </ul>
          </div>
          <h2 className="category-title">New York Photos</h2>
        </div>
      </div>
      <Main />
    </>
  );
}

export default Category;

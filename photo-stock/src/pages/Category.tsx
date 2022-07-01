import React from 'react';
import Main from '../components/Main';

import photoSize from '../assets/img/photosize.png';
import orientation_port from '../assets/img/orientation_port.png';
import orientation_land from '../assets/img/orientation_land.png';

function Category() {
  const [orientation, setOrientation] = React.useState(
    localStorage.getItem('orientation') === 'landscape' ? orientation_land : orientation_port,
  );

  function changeOrientation() {
    if (orientation === orientation_port) {
      setOrientation(orientation_land);
      localStorage.setItem('orientation', 'landscape');
      window.location.href = 'Category';
    } else {
      setOrientation(orientation_port);
      localStorage.setItem('orientation', 'portrait');
      window.location.href = 'Category';
    }
  }

  let categoryTitle: string | null = localStorage.getItem('searchitem');
  if (categoryTitle) {
    categoryTitle = categoryTitle?.charAt(0).toUpperCase() + categoryTitle?.slice(1).toLowerCase();
  }

  function changeSize(value: string) {
    localStorage.setItem('sizeimage', value);
    window.location.href = 'Category';
  }

  return (
    <>
      <div className="category">
        <div className="category-background"></div>
        <div className="container">
          <div className="category-container">
            <ul className="category-filters">
              <li className="category-filters-item orientation" onClick={changeOrientation}>
                <img className="category-photo" src={orientation} alt="orientation"></img>
                Orientation
              </li>
              <li className="category-filters-item">
                <img className="category-photo" src={photoSize} alt="orientation"></img>
                Size:
                <select
                  className="category-select"
                  onChange={(e) => {
                    changeSize(e.target.value);
                  }}>
                  <option disabled selected hidden>
                    {localStorage.getItem('sizeimage')}
                  </option>
                  <option value="large">large</option>
                  <option value="medium">medium</option>
                  <option value="small">small</option>
                </select>
              </li>
            </ul>
          </div>
          <h2 className="category-title">{categoryTitle} Photos</h2>
        </div>
      </div>
      <Main />
    </>
  );
}

export default Category;

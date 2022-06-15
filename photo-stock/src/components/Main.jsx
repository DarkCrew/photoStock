import React from 'react';

import image1 from '../assets/img/photo1.jpg';
import image2 from '../assets/img/photo2.jpg';
import image3 from '../assets/img/photo3.jpg';
import image4 from '../assets/img/photo4.jpg';
import image5 from '../assets/img/photo5.jpg';
import image6 from '../assets/img/photo6.jpg';

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main-title-container">
          <h2 className="main-title">Free Stock Photos</h2>
        </div>
        <div className="images-container">
          <div className="images-column">
            <img src={image1} alt="images-column-item"></img>
            <img src={image4} alt="images-column-item"></img>
          </div>
          <div className="images-column">
            <img src={image2} alt="images-column-item"></img>
            <img src={image5} alt="images-column-item"></img>
          </div>
          <div className="images-column">
            <img src={image3} alt="images-column-item"></img>
            <img src={image6} alt="images-column-item"></img>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

import React from 'react';

import image1 from '../assets/img/photo1.jpg';
import image2 from '../assets/img/photo2.jpg';
import image3 from '../assets/img/photo3.jpg';
import image4 from '../assets/img/photo4.jpg';
import image5 from '../assets/img/photo5.jpg';
import image6 from '../assets/img/photo6.jpg';

import btnHeart from '../assets/img/heart.png';
import btnDownload from '../assets/img/download.png';

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main-title-container">
          <h2 className="main-title">Free Stock Photos</h2>
        </div>
        <div className="images-container">
          <div className="images-column">
            <div className="images-column-item">
              <div className="image-column-item">
                <img src={image1} alt="photos-item"></img>
              </div>
              <div className="item-info">
                <div className="item-info-author">
                  <img
                    src="https://images.pexels.com/users/avatars/224803103/abraham-perez-549.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
                    alt="item-photos-autor"></img>
                  <p>Abraham Pérez</p>
                </div>
                <div className="item-info-btns">
                  <img src={btnHeart} alt="btn-heart"></img>
                  <img src={btnDownload} alt="btn-download"></img>
                </div>
              </div>
            </div>
            <div className="images-column-item">
              <img src={image4} alt="photos-item"></img>
            </div>
          </div>
          <div className="images-column">
            <div className="images-column-item">
              <img src={image2} alt="photos-item"></img>
            </div>
            <div className="images-column-item">
              <img src={image5} alt="photos-item"></img>
            </div>
          </div>
          <div className="images-column">
            <div className="images-column-item">
              <img src={image3} alt="photos-item"></img>
            </div>
            <div className="images-column-item">
              <img src={image6} alt="photos-item"></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

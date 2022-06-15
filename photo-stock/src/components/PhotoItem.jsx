import React from 'react';

import btnHeart from '../assets/img/heart.png';
import btnDownload from '../assets/img/download.png';

function PhotoItem(props) {
  return (
    <div className="images-column-item">
      <div className="image-column-item">
        <img src={props.src.medium} alt="photos-item"></img>
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
  );
}

export default PhotoItem;

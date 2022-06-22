import React from 'react';

import btnHeart from '../assets/img/heart.png';
import btnDownload from '../assets/img/download.png';
import { type } from '@testing-library/user-event/dist/type';

function PhotoItem(props: { id: number; photographer: string; key: number; src: object }) {
  const imagesUrls: { medium?: string } = props.src;
  const [isShown, setIsShown] = React.useState(false);

  return (
    <div className="images-column-item">
      <div
        className="image-column-item"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <img src={imagesUrls.medium} alt="photos-item"></img>
      </div>
      {isShown && (
        <div
          className="item-info"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <div className="item-info-author">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="item-photos-autor"></img>
            <p>{props.photographer}</p>
          </div>
          <div className="item-info-btns">
            <img className="item-info-btn-heart" src={btnHeart} alt="btn-heart"></img>
            <img src={btnDownload} alt="btn-download"></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoItem;

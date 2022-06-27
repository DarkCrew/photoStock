import React from 'react';

import btnHeart from '../assets/img/heart.png';
import btnDownload from '../assets/img/download.png';

function PhotoItem(props: { id: number; photographer: string; key: number; src: object }) {
  const imagesUrls: { medium?: string } = props.src;
  const [isShown, setIsShown] = React.useState(false);

  function updateLike() {
    console.log(props);
  }

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
            <img
              onClick={updateLike}
              className="item-info-btn-heart"
              src={btnHeart}
              alt="btn-heart"></img>
            <a
              className="item-info-link"
              href="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
              download="dodo.jpg">
              <img src={btnDownload} alt="btn-download"></img>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoItem;

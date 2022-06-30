import React from 'react';

import btnHeart from '../assets/img/heart.png';
import btnDownload from '../assets/img/download.png';

function PhotoItem(props: { id: number; photographer: string; key: number; src: object }) {
  const imagesUrls: { medium?: string; original?: string } = props.src;
  const originalPhoto: any = imagesUrls.original;
  const [isShown, setIsShown] = React.useState(false);

  function updateLike() {
    console.log(localStorage.getItem(props.id.toString()) === 'true');
    if (localStorage.getItem(props.id.toString()) === 'true') {
      localStorage.removeItem(props.id.toString());
    } else {
      localStorage.setItem(props.id.toString(), 'true');
    }
    console.log(localStorage.getItem(props.id.toString()));
  }

  function saveImg(blob: any) {
    let link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', Date.now().toString());
    link.click();
  }

  function getImagesUrls() {
    alert('Photo loading in progress');
    fetch(originalPhoto)
      .then((resp) => resp.blob())
      .then((blob) => saveImg(blob));
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
              className={
                localStorage.getItem(props.id.toString()) === 'true'
                  ? 'item-info-btn-heart active'
                  : 'item-info-btn-heart'
              }
              src={btnHeart}
              alt="btn-heart"></img>
            <div className="item-info-link" onClick={() => getImagesUrls()}>
              <img src={btnDownload} alt="btn-download"></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoItem;

import React, { useState } from 'react';
import PhotoItem from './PhotoItem';

export const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

type fetchObj = {
  id: 1;
  src: {};
};

const fetchImagesPexels = async (url: string) => {
  const data = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const { photos } = await data.json();

  return photos;
};

function Main() {
  const [images, setImages] = useState([]);
  React.useEffect(() => {
    const fetchImages = async (url: string) => {
      const images = await fetchImagesPexels(url);
      setImages(images);
    };

    fetchImages('https://api.pexels.com/v1/search?query=car&per_page=12');
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main-title-container">
          <h2 className="main-title">Free Stock Photos</h2>
        </div>
        <div className="images-container">
          <div className="images-column">
            {images.map((obj: fetchObj, index) =>
              index >= 0 && index < 4 ? <PhotoItem key={obj.id} {...obj} /> : '',
            )}
          </div>
          <div className="images-column">
            {images.map((obj: fetchObj, index) =>
              index > 3 && index < 8 ? <PhotoItem key={obj.id} {...obj} /> : '',
            )}
          </div>
          <div className="images-column">
            {images.map((obj: fetchObj, index) =>
              index > 7 && index < 12 ? <PhotoItem key={obj.id} {...obj} /> : '',
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

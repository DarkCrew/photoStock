import React from 'react';
import CategoryNames from './CategoryNames';
import SearchForm from './SearchForm';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';
let controller = new AbortController();

type ImageInfo = {
  src: {
    landscape: string;
  };
  photographer: string;
  photographer_url: string;
};

function Header() {
  let arrCategoryIndex: number[] = [];

  while (arrCategoryIndex.length < 7) {
    const randomValue: number = Math.floor(Math.random() * 40);
    if (arrCategoryIndex.indexOf(randomValue) > -1) continue;
    arrCategoryIndex[arrCategoryIndex.length] = randomValue;
  }

  const fetchTopImagesPexels = async (url: string) => {
    try {
      const data = await fetch(url, {
        signal: controller.signal,
        headers: {
          Authorization: API_KEY,
        },
      });
      const { photos } = await data.json();

      return photos;
    } catch (err: any) {
      if (err.name == 'AbortError') {
        alert('Ошибка запроса фото');
      } else {
        throw err;
      }
    }
  };

  const [topImages, setTopImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchImages = async (url: string) => {
      const images = await fetchTopImagesPexels(url);
      setTopImages(images);
      setIsLoading(true);
    };

    fetchImages('https://api.pexels.com/v1/curated?per_page=40');
  }, []);

  const curTopImage: ImageInfo = topImages[arrCategoryIndex[0]];

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
        {isLoading && (
          <a
            className="header-photo-publisher"
            href={curTopImage.photographer_url}
            target="_blank"
            rel="noreferrer">
            <span className="header-photo-publisher-title">Photo by&nbsp;</span>
            <span className="header-photo-publisher-name">{curTopImage.photographer}</span>
          </a>
        )}
        {isLoading && (
          <img
            className="header-background"
            src={curTopImage.src.landscape}
            alt="background-header"></img>
        )}
      </div>
    </div>
  );
}

export default Header;

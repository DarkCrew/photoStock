import React from 'react';
import PhotoItem from './PhotoItem';
import notFoundImage from '../assets/img/not-found.svg';

import { useSelector, useDispatch } from 'react-redux';
import { fetchImage } from '../redux/slices/imagesSlice';
import { changeCurrentPage } from '../redux/slices/imagesSlice';
import { AppDispatch, RootState } from '../redux/store';
import { useFetching } from '../hooks/useFetching';

type fetchObj = {
  id: 1;
  src: {};
  photographer: string;
  photographer_url: string;
};

function Main() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const lastElement = React.useRef<HTMLDivElement>(null);
  const observer = React.useRef<IntersectionObserver | null>(null);

  const { items, status, currentPages, searchItem, orientation, totalResults } = useSelector(
    (state: RootState) => state.imagesReducer,
  );

  const dispatch = useDispatch<AppDispatch>();

  const [fetching, isImagesLoading, imagesError] = useFetching(async () => {
    dispatch(changeCurrentPage());
    const fetchingImages = await dispatch(fetchImage({ currentPages, searchItem, orientation }));
  });

  const arrFirstColumnNumbers = [0, 1, 2, 3];
  const arrSecondColumnNumbers = [4, 5, 6, 7];
  const arrThirdColumnNumbers = [8, 9, 10, 11];
  const [arrFirstColumn, setArrFirstColumn] = React.useState(arrFirstColumnNumbers);
  const [arrSecondColumn, setArrSecondColumn] = React.useState(arrSecondColumnNumbers);
  const [arrThirdColumn, setArrThirdColumn] = React.useState(arrThirdColumnNumbers);

  React.useEffect(() => {
    if (isImagesLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entries: any) {
      if (entries[0].isIntersecting && currentPage <= Math.floor(totalResults / 12) + 1) {
        setCurrentPage(currentPage + 1);
        setArrFirstColumn([
          ...arrFirstColumn,
          ...arrFirstColumnNumbers.map((elem) => elem + 12 * (currentPage - 1)),
        ]);
        setArrSecondColumn([
          ...arrSecondColumn,
          ...arrSecondColumnNumbers.map((elem) => elem + 12 * (currentPage - 1)),
        ]);
        setArrThirdColumn([
          ...arrThirdColumn,
          ...arrThirdColumnNumbers.map((elem) => elem + 12 * (currentPage - 1)),
        ]);
        fetching();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current as Element);
  }, [isImagesLoading]);

  if (status === 'nothing') {
    window.location.href = 'no-results';
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main-title-container">
          {isImagesLoading ? (
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            ''
          )}
          <h2 className="main-title">Free Stock Photos</h2>
        </div>
        {status === 'nothing' ? (
          <div className="images-not-found">
            <img className="not-found-image" src={notFoundImage} alt="not-found"></img>
            <h3 className="not-found-title">Try that again</h3>
            <p className="not-found-subtitle">The search could not find a photo for your request</p>
          </div>
        ) : (
          <div className="images-container">
            <div className="images-column">
              {items.map((obj: fetchObj, index) =>
                arrFirstColumn.indexOf(index) > -1 ? <PhotoItem key={obj.id} {...obj} /> : '',
              )}
            </div>
            <div className="images-column">
              {items.map((obj: fetchObj, index) =>
                arrSecondColumn.indexOf(index) > -1 ? <PhotoItem key={obj.id} {...obj} /> : '',
              )}
            </div>
            <div className="images-column">
              {items.map((obj: fetchObj, index) =>
                arrThirdColumn.indexOf(index) > -1 ? <PhotoItem key={obj.id} {...obj} /> : '',
              )}
            </div>
          </div>
        )}
        <div ref={lastElement} className="download-container" id="scrollArea"></div>
      </div>
    </main>
  );
}

export default Main;

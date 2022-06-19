import React from 'react';
import PhotoItem from './PhotoItem';

import { useSelector, useDispatch } from 'react-redux';
import { fetchImage } from '../redux/slices/imagesSlice';
import { AppDispatch, RootState } from '../redux/store';

type fetchObj = {
  id: 1;
  src: {};
};

const searchItem = 'car';

function Main() {
  const items = useSelector((state: RootState) => state.imagesReducer.items);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchImage(searchItem));
  }, [dispatch]);

  return (
    <main className="main">
      <div className="container">
        <div className="main-title-container">
          <h2 className="main-title">Free Stock Photos</h2>
        </div>
        <div className="images-container">
          <div className="images-column">
            {items.map((obj: fetchObj, index) =>
              index >= 0 && index < 4 ? <PhotoItem key={obj.id} {...obj} /> : '',
            )}
          </div>
          <div className="images-column">
            {items.map((obj: fetchObj, index) =>
              index > 3 && index < 8 ? <PhotoItem key={obj.id} {...obj} /> : '',
            )}
          </div>
          <div className="images-column">
            {items.map((obj: fetchObj, index) =>
              index > 7 && index < 12 ? <PhotoItem key={obj.id} {...obj} /> : '',
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

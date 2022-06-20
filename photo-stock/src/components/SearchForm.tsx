import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchImage } from '../redux/slices/imagesSlice';
import { AppDispatch } from '../redux/store';

function SearchForm() {
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();

  function searchNewInfo() {
    if (inputValue !== '') {
      dispatch(fetchImage(inputValue));
    }
  }

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="search"
        className="content-search"
        placeholder="Search for free photos and videos"
      />
      <button className="search-btn">
        <img
          onClick={() => searchNewInfo()}
          className="search-btn-image"
          src="https://cdn-icons.flaticon.com/png/512/4024/premium/4024513.png?token=exp=1655210527~hmac=6df853562d1deebd4c30d6467ec306c6"
          alt="search-button"></img>
      </button>
    </>
  );
}

export default SearchForm;

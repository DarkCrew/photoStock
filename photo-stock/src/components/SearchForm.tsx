import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import searchIcon from '../assets/img/search.png';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentPage, setItems, setSearchItems } from '../redux/slices/imagesSlice';

function SearchForm() {
  const { searchItem } = useSelector((state: RootState) => state.imagesReducer);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function searchNewInfo() {
    if (searchItem !== '') {
      dispatch(setItems([]));
      dispatch(setCurrentPage());
      navigate('/Category');
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (searchItem !== '' && event.key === 'Enter') {
      navigate('/Category');
      searchNewInfo();
    }
  };

  return (
    <>
      <input
        value={searchItem}
        onKeyPress={handleKeyPress}
        onChange={(e) => dispatch(setSearchItems(e.target.value))}
        type="search"
        className="content-search"
        placeholder="Search for free photos and videos"
      />
      <div className="search-btn">
        <img
          onClick={() => searchNewInfo()}
          className="search-btn-image"
          src={searchIcon}
          alt="search-button"></img>
      </div>
    </>
  );
}

export default SearchForm;

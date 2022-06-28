import React from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import searchIcon from '../assets/img/search.png';
import { Link } from 'react-router-dom';
import { setCurrentPage, setItems, setSearchItems } from '../redux/slices/imagesSlice';

function SearchForm() {
  const [searchItem, setSearchItem] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();

  function searchNewInfo() {
    if (searchItem !== '') {
      dispatch(setItems([]));
      dispatch(setCurrentPage());
      dispatch(setSearchItems(searchItem));
    }
  }

  return (
    <>
      <input
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        type="search"
        className="content-search"
        placeholder="Search for free photos and videos"
      />
      <Link to="/Category" className="search-btn">
        <img
          onClick={() => searchNewInfo()}
          className="search-btn-image"
          src={searchIcon}
          alt="search-button"></img>
      </Link>
    </>
  );
}

export default SearchForm;

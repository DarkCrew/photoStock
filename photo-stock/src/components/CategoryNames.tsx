import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import {
  changeOrientaion,
  setCurrentPage,
  setItems,
  setSearchItems,
} from '../redux/slices/imagesSlice';

function CategoryNames(props: { key: number; curNumber: number; curIndex: number }) {
  const arrCategoryNames: string[] = [
    'business',
    'space',
    'food',
    'summer',
    'technology',
    'forest',
    'beach',
    'yoga',
    'ocean',
    'texture',
    'house',
    'city',
    'coffee',
    'mountain',
    'nature',
    'sky',
    'office',
    'flowers',
    'sunset',
    'car',
    'animal',
    'children',
    'school',
    'party',
    'cooking',
    'work',
    'family',
    'design',
    'medical',
    'drink',
    'people',
    'plant',
    'birthday',
    'meal',
    'landscape',
    'cartoon',
    'road',
    'music',
    'art',
    'stone',
  ];

  const dispatch = useDispatch<AppDispatch>();
  function searchNewInfo(searchItem: string) {
    dispatch(setSearchItems(searchItem));
    dispatch(setItems([]));
    dispatch(setCurrentPage());
    dispatch(changeOrientaion('portrait'));
    localStorage.setItem('searchitem', searchItem);
  }

  return (
    <li>
      <Link
        className="header-content-trending-item"
        to="/Category"
        onClick={() => searchNewInfo(arrCategoryNames[props.curNumber])}
        rel="noreferrer">
        {arrCategoryNames[props.curNumber]}
      </Link>
      {props.curIndex !== 6 && <span>,&nbsp;</span>}
    </li>
  );
}

export default CategoryNames;

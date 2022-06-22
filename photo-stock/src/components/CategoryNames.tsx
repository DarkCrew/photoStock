import React from 'react';

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

  return (
    <li>
      <a
        className="header-content-trending-item"
        href="https://www.pexels.com/search/business/"
        target="_blank"
        rel="noreferrer">
        {arrCategoryNames[props.curNumber]}
      </a>
      {props.curIndex !== 6 && <span>,&nbsp;</span>}
    </li>
  );
}

export default CategoryNames;

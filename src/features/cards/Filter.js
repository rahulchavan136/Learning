import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './cardSlice';
 
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setFilter('All'))}>All</button>
      <button onClick={() => dispatch(setFilter('Category A'))}>Category A</button>
      <button onClick={() => dispatch(setFilter('Category B'))}>Category B</button>
    </div>
  );
};

export default Filter;

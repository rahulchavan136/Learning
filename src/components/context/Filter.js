import React, { useContext } from 'react';
import { CardContext } from './CardContext';
import { Button } from 'react-bootstrap';
 
const Filter = () => {
  const { dispatch } = useContext(CardContext);

  return (
    <div>
      <Button variant='primary' onClick={() => dispatch({ type: 'SET_FILTER', payload: 'All' })}>All</Button>&nbsp;
      <Button variant='primary' onClick={() => dispatch({ type: 'SET_FILTER', payload: 'Category A' })}>Category A</Button>&nbsp;
      <Button variant='primary' onClick={() => dispatch({ type: 'SET_FILTER', payload: 'Category B' })}>Category B</Button>
    </div>
  );
};

export default Filter;

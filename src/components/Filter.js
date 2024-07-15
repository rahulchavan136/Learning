import React from 'react';
import { Button } from 'react-bootstrap';

const Filter = ({ setFilter }) => (
  <div>
    <Button variant='danger'  onClick={() => setFilter('All')}>All</Button> &nbsp;
    <Button variant='danger'  onClick={() => setFilter('Category A')}>Category A</Button>&nbsp;
    <Button variant='danger'  onClick={() => setFilter('Category B')}>Category B</Button>
  </div>
);

export default Filter;

import React from 'react';

const CardComponent = ({ card, onDelete }) => (
  <div className="card">
    <h3>{card.title}</h3>
    <p>{card.category}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default CardComponent;

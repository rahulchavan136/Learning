import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardComponent from './CardComponent';
import { deleteCard } from './cardSlice';

const CardList = () => {
  const dispatch = useDispatch();
  const { cards, filter } = useSelector(state => state.cards);
  
  const filteredCards = filter === 'All' ? cards : cards.filter(card => card.category === filter);

  return (
    <>
      {filteredCards.map(card => (
        <CardComponent key={card.id} card={card} onDelete={() => dispatch(deleteCard(card.id))} />
      ))}
    </>
  );
};

export default CardList;

import React, { useContext } from 'react';
 import CardComponent from './CardComponent';
import { CardContext } from './CardContext';

const CardList = () => {
  const { state, dispatch } = useContext(CardContext);
  
  const filteredCards = state.filter === 'All' ? state.cards : state.cards.filter(card => card.category === state.filter);

  return (
    <>
      {filteredCards.map(card => (
        <CardComponent key={card.id} card={card} onDelete={(id) => dispatch({ type: 'DELETE_CARD', payload: id })} />
      ))}
    </>
  );
};

export default CardList;

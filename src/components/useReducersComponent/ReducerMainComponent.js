import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap';
import { initialState, reducer } from './reducer';
import Filter from './Filter';
import CardComponent from './CardComponent';

export const ReducerMainComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredCards = state.filter === 'All' ? state.cards : state.cards.filter(card => card.category === state.filter);
    console.log(filteredCards);
  return (
    <Container>
      <h1>Card Management using useReducer</h1>
      <Filter setFilter={(filter) => dispatch({ type: 'SET_FILTER', payload: filter })} /><br />
      <div className="card-list">
        {filteredCards.map(card => (
          <CardComponent key={card.id} card={card} onDelete={(id) => dispatch({ type: 'DELETE_CARD', payload: id })} />
        ))}
      </div>
    </Container>
  )
}
